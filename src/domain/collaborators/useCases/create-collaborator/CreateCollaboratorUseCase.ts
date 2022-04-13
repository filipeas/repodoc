import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';
import { IRequestCreateCollaborator } from '@domain/collaborators/request/IRequestCreateCollaborator';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';

@injectable()
export class CreateCollaboratorUseCase {
    constructor(
        @inject('CollaboratorRepository')
        private collaboratorRepository: ICollaboratorRepository,
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
    ) { }

    async run({
        user_id,
        organization_id,
        level_id,
    }: IRequestCreateCollaborator): Promise<void> {
        const existentCollaborator = await this.collaboratorRepository.findByUserAndOrganization(user_id, organization_id);
        if (existentCollaborator) {
            throw new BadRequestError(
                'Usuário já está vinculado na organização',
            );
        }

        const organization = await this.organizationRepository.findByID(organization_id);
        if (!organization) {
            throw new BadRequestError(
                'Organização não encontrada',
            );
        }

        const administrador = await this.organizationRepository.findByUserAndOrganizationId(user_id, organization_id);
        if (administrador) {
            throw new BadRequestError(
                'Usuário informado é proprietário da organização',
            );
        }

        const collaborator = await this.collaboratorRepository.create({
            user_id,
            organization_id,
            level_id,
        });
    }
}
