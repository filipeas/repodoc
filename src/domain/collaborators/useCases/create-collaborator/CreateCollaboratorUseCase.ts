import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';
import { IRequestCreateCollaborator } from '@domain/collaborators/request/IRequestCreateCollaborator';

@injectable()
export class CreateCollaboratorUseCase {
    constructor(
        @inject('CollaboratorRepository')
        private collaboratorRepository: ICollaboratorRepository,
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

        const collaborator = await this.collaboratorRepository.create({
            user_id,
            organization_id,
            level_id,
        });
    }
}
