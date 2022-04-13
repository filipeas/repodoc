import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteRouteUseCase } from './DeleteRouteUseCase';

export class DeleteRouteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteRoute = container.resolve(DeleteRouteUseCase);

        const route = await deleteRoute.run({ id });

        return response.status(201).json({ route });
    }
}
