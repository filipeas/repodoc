import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { IRequestListDocumentByUserID } from '@domain/organizations/request/IRequestListDocumentByUserID';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';

@injectable()
export class ListDocumentByUserIDUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    async run({ user_id }: IRequestListDocumentByUserID): Promise<Organization[]> {
        const user = await this.userRepository.findById(user_id);
        if (!user) {
            throw new BadRequestError('Usuário não encontrado');
        }

        const organizations = await this.organizationRepository.findByUserId(user_id);

        return organizations;
    }
}
