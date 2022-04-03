import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';
import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { IRequestListByUserID } from '@domain/collaborators/request/IRequestListByUserID';

@injectable()
export class ListCollaboratorByUserIDUseCase {
    constructor(
        @inject('CollaboratorRepository')
        private collaboratorRepository: ICollaboratorRepository,
    ) { }

    async run({ user_id }: IRequestListByUserID): Promise<Collaborator[]> {
        const collaborator = await this.collaboratorRepository.findByUserId(user_id);

        if (!collaborator) {
            throw new BadRequestError('Usuário não está vinculado na organização');
        }

        return collaborator;
    }
}
