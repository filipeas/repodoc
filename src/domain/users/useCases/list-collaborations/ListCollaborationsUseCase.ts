import { inject, injectable } from 'tsyringe';

import { IRequestUserID } from '@domain/users/request/IRequestUserID';
import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';
import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';

@injectable()
export class ListCollaborationsUseCase {
    constructor(
        @inject('CollaboratorRepository')
        private collaboratorRepository: ICollaboratorRepository,
    ) { }

    async run({ id }: IRequestUserID): Promise<Collaborator[]> {
        const collaborators = await this.collaboratorRepository.findByUserId(id);

        return collaborators;
    }
}
