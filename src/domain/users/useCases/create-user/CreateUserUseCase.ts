import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { hash } from 'bcryptjs';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestCreateUser } from '@domain/users/request/IRequestCreateUser';
import { IResponseCreateUser } from '@domain/users/response/IResponseCreateUser';

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) {}

    async run({
        name,
        email,
        password,
    }: IRequestCreateUser): Promise<IResponseCreateUser> {
        const existentUser = await this.userRepository.findByEmail(email);

        if (existentUser) {
            throw new BadRequestError('E-mail já cadastrado');
        }

        const passwordHash = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: passwordHash,
        });

        return {
            name: user.name,
            email: user.email,
        };
    }
}
