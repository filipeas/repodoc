import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateDocumentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, status, privacy } = request.body;

        const createDocument = container.resolve(CreateUserUseCase);

        const document = await createDocument.run({
            title, description, status, privacy
        });

        return response.status(201).json({ document });
    }
}
