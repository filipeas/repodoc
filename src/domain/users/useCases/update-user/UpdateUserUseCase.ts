import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestUpdateUser } from '@domain/users/request/IRequestUpdateUser';
import { IResponseCreateUser } from '@domain/users/response/IResponseCreateUser';

@injectable()
export class UpdateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ id, name }: IRequestUpdateUser): Promise<IResponseCreateUser> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new BadRequestError('Usuário não encontrado');
        }

        Object.assign(user, {
            name,
        });

        await this.userRepository.save(user);

        return {
            name: user.name,
            email: user.email,
        };
    }
}
