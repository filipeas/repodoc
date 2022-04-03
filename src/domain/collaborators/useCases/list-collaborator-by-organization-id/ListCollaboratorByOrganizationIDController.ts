import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCollaboratorByOrganizationIDUseCase } from './ListCollaboratorByOrganizationIDUseCase';

export class ListCollaboratorByOrganizationIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { organization_id } = request.params;

        const listCollaborator = container.resolve(ListCollaboratorByOrganizationIDUseCase);

        const collaborator = await listCollaborator.run({ organization_id });

        return response.status(201).json({ collaborator });
    }
}
