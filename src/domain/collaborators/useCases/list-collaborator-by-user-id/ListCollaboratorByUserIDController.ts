import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCollaboratorByUserIDUseCase } from './ListCollaboratorByUserIDUseCase';

export class ListCollaboratorByUserIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const listCollaborator = container.resolve(ListCollaboratorByUserIDUseCase);

        const collaborator = await listCollaborator.run({ user_id });

        return response.status(201).json({ collaborator });
    }
}
