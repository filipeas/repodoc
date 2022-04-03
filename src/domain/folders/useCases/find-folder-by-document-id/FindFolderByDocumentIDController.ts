import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindFolderByDocumentIDUseCase } from './FindFolderByDocumentIDUseCase';

export class FindFolderByDocumentIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document_id } = request.params;

        const findFolder = container.resolve(FindFolderByDocumentIDUseCase);

        const folder = await findFolder.run({ document_id });

        return response.status(201).json({ folder });
    }
}
