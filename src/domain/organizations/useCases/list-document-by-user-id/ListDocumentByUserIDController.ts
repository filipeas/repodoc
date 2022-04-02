import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListDocumentByUserIDUseCase } from './ListDocumentByUserIDUseCase';

export class ListDocumentByUserIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.params;

        const listOrganization = container.resolve(ListDocumentByUserIDUseCase);

        const organization = await listOrganization.run({
            user_id
        });

        return response.status(201).json({ organization });
    }
}
