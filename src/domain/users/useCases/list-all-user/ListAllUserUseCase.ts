import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { IResponseListAllUser } from '@domain/users/response/IResponseListAllUser';

@injectable()
export class ListAllUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run(): Promise<IResponseListAllUser[]> {
        const existentUser = await this.userRepository.findAll();

        return existentUser.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            updated_at: user.updated_at,
            created_at: user.created_at,
        }));
    }
}
