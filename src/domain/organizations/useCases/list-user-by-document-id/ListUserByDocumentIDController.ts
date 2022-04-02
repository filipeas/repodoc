import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserByDocumentIDUseCase } from './ListUserByDocumentIDUseCase';

export class ListUserByDocumentIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document_id } = request.params;

        const listOrganization = container.resolve(ListUserByDocumentIDUseCase);

        const organization = await listOrganization.run({
            document_id
        });

        return response.status(201).json({ organization });
    }
}
