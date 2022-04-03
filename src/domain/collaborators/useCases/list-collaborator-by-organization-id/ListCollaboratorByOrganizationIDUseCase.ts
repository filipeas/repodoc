import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';
import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { IRequestListByOrganizationID } from '@domain/collaborators/request/IRequestListByOrganizationID';

@injectable()
export class ListCollaboratorByOrganizationIDUseCase {
    constructor(
        @inject('CollaboratorRepository')
        private collaboratorRepository: ICollaboratorRepository,
    ) { }

    async run({ organization_id }: IRequestListByOrganizationID): Promise<Collaborator[]> {
        const collaborator = await this.collaboratorRepository.findByOrganizationId(organization_id);

        if (!collaborator) {
            throw new BadRequestError('Usuário não está vinculado na organização');
        }

        return collaborator;
    }
}
