import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListDocumentByIDUseCase } from './ListDocumentByIDUseCase';

export class ListDocumentByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listDocument = container.resolve(ListDocumentByIDUseCase);

        const document = await listDocument.run({
            id,
        });

        return response.status(201).json({ document });
    }
}
