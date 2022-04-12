import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRouteUseCase } from './CreateRouteUseCase';

export class CreateRouteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document_id, folder_id, title, description, url, type_request } = request.body;

        const createRoute = container.resolve(CreateRouteUseCase);

        const route = await createRoute.run({ document_id, folder_id, title, description, url, type_request });

        return response.status(201).json({ route });
    }
}
