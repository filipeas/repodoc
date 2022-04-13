import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateRouteUseCase } from './UpdateRouteUseCase';

export class UpdateRouteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document_id, folder_id, title, description, url, type_request } = request.body;
        const { id } = request.params;

        const updateRoute = container.resolve(UpdateRouteUseCase);

        const route = await updateRoute.run({ id, document_id, folder_id, title, description, url, type_request });

        return response.status(201).json({ route });
    }
}
