import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindFolderByIDUseCase } from './FindFolderByIDUseCase';

export class FindFolderByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findFolder = container.resolve(FindFolderByIDUseCase);

        const folder = await findFolder.run({ id });

        return response.status(201).json({ folder });
    }
}
