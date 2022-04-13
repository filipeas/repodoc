import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindRoutesByDocumentIDUseCase } from './FindRoutesByDocumentIDUseCase';

export class FindRoutesByDocumentIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { document_id } = request.params;

        const getRoutes = container.resolve(FindRoutesByDocumentIDUseCase);

        const route = await getRoutes.run({ document_id });

        return response.status(201).json({ route });
    }
}
