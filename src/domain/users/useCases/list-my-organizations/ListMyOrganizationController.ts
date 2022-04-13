import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListMyOrganizationUseCase } from './ListMyOrganizationUseCase';

export class ListMyOrganizationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listOrganizations = container.resolve(ListMyOrganizationUseCase);

        const organizations = await listOrganizations.run({
            id: request.user.id,
        });

        return response.status(201).json({ organizations });
    }
}
