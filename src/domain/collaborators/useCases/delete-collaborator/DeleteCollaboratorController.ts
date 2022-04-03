import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCollaboratorUseCase } from './DeleteCollaboratorUseCase';

export class DeleteCollaboratorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, organization_id } = request.params;

        const deleteCollaborator = container.resolve(DeleteCollaboratorUseCase);

        const collaborator = await deleteCollaborator.run({ user_id, organization_id });

        return response.status(201).json({ collaborator });
    }
}
