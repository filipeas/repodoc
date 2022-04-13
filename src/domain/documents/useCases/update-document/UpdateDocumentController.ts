import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateDocumentUseCase } from './UpdateDocumentUseCase';

export class UpdateDocumentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, status, privacy } = request.body;
        const { id } = request.params;

        const editDocument = container.resolve(UpdateDocumentUseCase);

        const document = await editDocument.run({
            id,
            title,
            description,
            status,
            privacy,
        });

        return response.status(201).json({ document });
    }
}
