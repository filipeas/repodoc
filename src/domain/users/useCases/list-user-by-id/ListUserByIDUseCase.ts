import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { IRequestUserID } from '@domain/users/request/IRequestUserID';
import { IResponseListAllUser } from '@domain/users/response/IResponseListAllUser';
import { BadRequestError } from '@infra/http/errors/BadRequestError';

@injectable()
export class ListUserByIDUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async run({ id }: IRequestUserID): Promise<IResponseListAllUser> {
    const user = await this.userRepository.findById(id);

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
