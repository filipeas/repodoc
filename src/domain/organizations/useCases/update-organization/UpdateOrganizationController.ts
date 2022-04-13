import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateOrganizationUseCase } from './UpdateOrganizationUseCase';

export class UpdateOrganizationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title } = request.body;
        const {organization_id} = request.params;

        const updateOrganization = container.resolve(UpdateOrganizationUseCase);

        const organization = await updateOrganization.run({
            user_id: request.user.id, organization_id, title
        });

        return response.status(201).json({ organization });
    }
}
