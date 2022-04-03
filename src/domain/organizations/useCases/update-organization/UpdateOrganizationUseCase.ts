import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { IRequestUpdateOrganization } from '@domain/organizations/request/IRequestUpdateOrganization';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import { generateSlug } from '@infra/utils/generateSlug';

@injectable()
export class UpdateOrganizationUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository
    ) { }

    async run({ user_id, organization_id, title }: IRequestUpdateOrganization): Promise<Organization> {
        const slug = generateSlug(title);
        const organization = await this.organizationRepository.findByUserAndOrganizationId(user_id, organization_id);
        if (!organization) {
            throw new BadRequestError('Organização não encontrada');
        }

        if (organization.slug !== slug) {
            const checkSlug = await this.organizationRepository.findByUserAndSlug(user_id, slug);
            if (checkSlug) {
                throw new BadRequestError('Título já existe, utilize outro');
            }
        }

        Object.assign(organization, {
            title,
            slug,
        });

        await this.organizationRepository.save(organization);

        return organization;
    }
}
