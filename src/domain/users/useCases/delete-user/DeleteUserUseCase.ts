import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestDeleteUser } from '@domain/users/request/IRequestDeleteUser';

@injectable()
export class DeleteUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ id }: IRequestDeleteUser): Promise<void> {
        const existentUser = await this.userRepository.findById(id);

        if (!existentUser) {
            throw new BadRequestError('Usuário não encontrado');
        }

        await this.userRepository.delete(existentUser);
    }
}
