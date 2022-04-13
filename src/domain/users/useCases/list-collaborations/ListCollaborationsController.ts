import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCollaborationsUseCase } from './ListCollaborationsUseCase';

export class ListCollaborationsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listOrganizations = container.resolve(ListCollaborationsUseCase);

        const organizations = await listOrganizations.run({
            id: request.user.id,
        });

        return response.status(201).json({ organizations });
    }
}
