import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import { IRequestListOrganizationByUserID } from '@domain/organizations/request/IRequestListOrganizationByUserID';

@injectable()
export class ListOrganizationByUserIDUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
    ) { }

    async run({ user_id }: IRequestListOrganizationByUserID): Promise<Organization[]> {
        const organizations = await this.organizationRepository.findByUserID(user_id);
        if (!organizations) {
            throw new BadRequestError('Organização não encontrada');
        }

        return organizations;
    }
}
