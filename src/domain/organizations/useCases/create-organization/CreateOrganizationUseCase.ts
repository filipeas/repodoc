import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';
import { IRequestCreateOrganization } from '@domain/organizations/request/IRequestCreateOrganization';
import { IResponseCreateOrganization } from '@domain/organizations/response/IResponseCreateOrganization';
import { generateSlug } from '@infra/utils/generateSlug';

@injectable()
export class CreateOrganizationUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository
    ) { }

    async run({ user_id, title }: IRequestCreateOrganization): Promise<IResponseCreateOrganization> {
        const slug = generateSlug(title);

        const existentOrganization = await this.organizationRepository.findByUserAndSlug(user_id, slug);
        if (existentOrganization) {
            throw new BadRequestError('Organização já criada para a sua conta');
        }

        const organization = await this.organizationRepository.create({
            user_id,
            title,
            slug,
        });

        return {
            title: organization.title,
            slug: organization.slug,
        };
    }
}
