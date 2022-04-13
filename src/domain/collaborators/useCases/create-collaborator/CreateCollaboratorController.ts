import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCollaboratorUseCase } from './CreateCollaboratorUseCase';

export class CreateCollaboratorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, organization_id, level_id } = request.body;

        const createCollaborator = container.resolve(CreateCollaboratorUseCase);

        const collaborator = await createCollaborator.run({
            user_id,
            organization_id,
            level_id,
        });

        return response.status(201).json({ collaborator });
    }
}
