import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateFolderUseCase } from './UpdateFolderUseCase';

export class UpdateFolderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description } = request.body;
        const { id } = request.params;

        const updateFolder = container.resolve(UpdateFolderUseCase);

        const folder = await updateFolder.run({
            id,
            title,
            description,
        });

        return response.status(201).json({ folder });
    }
}
