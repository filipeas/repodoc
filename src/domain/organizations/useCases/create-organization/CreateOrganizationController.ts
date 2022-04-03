import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateOrganizationUseCase } from './CreateOrganizationUseCase';

export class CreateOrganizationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, title } = request.body;

        const createOrganization = container.resolve(CreateOrganizationUseCase);

        const organization = await createOrganization.run({ user_id, title });

        return response.status(201).json({ organization });
    }
}
