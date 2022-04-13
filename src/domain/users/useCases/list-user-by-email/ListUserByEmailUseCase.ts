import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { IResponseListAllUser } from '@domain/users/response/IResponseListAllUser';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestListUserByEmailUser } from '@domain/users/request/IRequestListUserByEmailUser';

@injectable()
export class ListUserByEmailUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ email }: IRequestListUserByEmailUser): Promise<IResponseListAllUser> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new BadRequestError('Usuário não encontrado');
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            updated_at: user.updated_at,
            created_at: user.created_at,
        };
    }
}
