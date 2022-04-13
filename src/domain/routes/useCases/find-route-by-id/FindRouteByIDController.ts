import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindRouteByIDUseCase } from './FindRouteByIDUseCase';

export class FindRouteByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getRoute = container.resolve(FindRouteByIDUseCase);

        const route = await getRoute.run({ id });

        return response.status(201).json({ route });
    }
}
