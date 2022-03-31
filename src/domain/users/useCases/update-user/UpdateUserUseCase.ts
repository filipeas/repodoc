import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestUpdateUser } from '@domain/users/request/IRequestUpdateUser';

@injectable()
export class UpdateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ id, name }: IRequestUpdateUser): Promise<void> {
        const existentUser = await this.userRepository.findById(id);

        if (!existentUser) {
            throw new BadRequestError('Usuário não encontrado');
        }

        Object.assign(existentUser, {
            name,
        });

        await this.userRepository.save(existentUser);
    }
}
