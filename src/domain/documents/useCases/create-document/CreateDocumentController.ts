import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateDocumentUseCase } from './CreateDocumentUseCase';

export class CreateDocumentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, status, privacy } = request.body;

        const createDocument = container.resolve(CreateDocumentUseCase);

        const document = await createDocument.run({
            title,
            description,
            status,
            privacy,
        });

        return response.status(201).json({ document });
    }
}
