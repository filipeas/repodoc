import { compare } from 'bcrypt';

import { inject, injectable } from 'tsyringe';

import { sign } from 'jsonwebtoken';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IResponseAuthUser } from '@domain/users/response/IResponseAuthUser';
import { IRequestAuthUser } from '@domain/users/request/IRequestAuthUser';

@injectable()
export class AuthUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ email, password }: IRequestAuthUser): Promise<IResponseAuthUser> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new BadRequestError('E-mail ou senha incorreta');
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new BadRequestError('E-mail ou senha incorreta');
        }

        const token = sign({}, String(process.env.KEY_AUTH), {
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
