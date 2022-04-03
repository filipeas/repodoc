import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteFolderUseCase } from './DeleteFolderUseCase';

export class DeleteFolderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteFolder = container.resolve(DeleteFolderUseCase);

        const folder = await deleteFolder.run({ id });

        return response.status(201).json({ folder });
    }
}
