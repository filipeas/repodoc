import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOrganizationByUserIDUseCase } from './ListOrganizationByUserIDUseCase';

export class ListOrganizationByUserIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const listOrganization = container.resolve(ListOrganizationByUserIDUseCase);

        const organization = await listOrganization.run({ user_id });

        return response.status(201).json({ organization });
    }
}
