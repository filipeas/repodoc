import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindRoutesByFolderIDUseCase } from './FindRoutesByFolderIDUseCase';

export class FindRoutesByFolderIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { folder_id } = request.params;

        const getRoutes = container.resolve(FindRoutesByFolderIDUseCase);

        const route = await getRoutes.run({ folder_id });

        return response.status(201).json({ route });
    }
}
