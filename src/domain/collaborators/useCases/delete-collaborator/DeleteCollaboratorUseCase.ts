import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';
import { IRequestDeleteCollaborator } from '@domain/collaborators/request/IRequestDeleteCollaborator';

@injectable()
export class DeleteCollaboratorUseCase {
    constructor(
        @inject('CollaboratorRepository')
        private collaboratorRepository: ICollaboratorRepository,
    ) { }

    async run({ user_id, organization_id }: IRequestDeleteCollaborator): Promise<void> {
        const collaborator = await this.collaboratorRepository.findByUserAndOrganization(user_id, organization_id);

        if (!collaborator) {
            throw new BadRequestError('Usuário não está vinculado na organização');
        }

        await this.collaboratorRepository.delete(collaborator);
    }
}
