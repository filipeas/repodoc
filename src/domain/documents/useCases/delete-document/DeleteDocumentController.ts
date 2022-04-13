import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteDocumentUseCase } from './DeleteDocumentUseCase';

export class DeleteDocumentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteDocument = container.resolve(DeleteDocumentUseCase);

        const document = await deleteDocument.run({ id });

        return response.status(201).json({ document });
    }
}
