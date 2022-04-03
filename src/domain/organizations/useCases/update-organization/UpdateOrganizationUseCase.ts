import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { IRequestUpdateOrganization } from '@domain/organizations/request/IRequestUpdateOrganization';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';

@injectable()
export class UpdateOrganizationUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository
    ) { }

    async run({ user_id, organization_id, title }: IRequestUpdateOrganization): Promise<Organization> {
        const organization = await this.organizationRepository.findByUserAndOrganizationId(user_id, organization_id);
        if (!organization) {
            throw new BadRequestError('Organização não encontrada');
        }

        Object.assign(organization, {
            title
        });

        await this.organizationRepository.save(organization);

        return organization;
    }
}
