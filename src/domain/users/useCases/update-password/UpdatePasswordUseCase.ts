import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { hash, compare } from 'bcrypt';
import { IRequestUpdatePasswordUser } from '@domain/users/request/IRequestUpdatePasswordUser';
import { BadRequestError } from '@infra/http/errors/BadRequestError';

@injectable()
export class UpdatePasswordUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ id, c_password, new_password }: IRequestUpdatePasswordUser): Promise<void> {
        const existentUser = await this.userRepository.findById(id);

        if (!existentUser) {
            throw new BadRequestError('Usuário não encontrado');
        }

        const passwordMatch = await compare(c_password, existentUser.password);
        if (!passwordMatch) {
            throw new BadRequestError('Senha atual incorreta');
        }

        const passwordHash = await hash(new_password, 8);

        Object.assign(existentUser, {
            password: passwordHash,
        });

        await this.userRepository.save(existentUser);
    }
}
