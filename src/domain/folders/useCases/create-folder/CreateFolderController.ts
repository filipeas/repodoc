import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateFolderUseCase } from './CreateFolderUseCase';

export class CreateFolderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document_id, title, description } = request.body;

        const createFolder = container.resolve(CreateFolderUseCase);

        const folder = await createFolder.run({
            document_id,
            title,
            description,
        });

        return response.status(201).json({ folder });
    }
}
