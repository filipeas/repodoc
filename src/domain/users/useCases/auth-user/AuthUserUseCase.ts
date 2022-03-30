import { compare } from 'bcrypt';

import { inject, injectable } from 'tsyringe';

import { sign } from 'jsonwebtoken';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IResponseCreateUser } from '@domain/users/response/IResponseCreateUser';
import { IRequestCreateUser } from '@domain/users/request/IRequestCreateUser';

@injectable()
export class AuthUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ email, password }: IRequestCreateUser): Promise<IResponseCreateUser> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new BadRequestError('E-mail ou senha incorreta');
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new BadRequestError('E-mail ou senha incorreta');
        }

        const token = sign({}, 'd6d7cbf35caac567a91718d2d7a135e0', {
            subject: String(user.id),
            expiresIn: '1d',
        });

        return {
            user: {
                name: user.name,
                email: user.email,
            },
            token,
        };
    }
}
