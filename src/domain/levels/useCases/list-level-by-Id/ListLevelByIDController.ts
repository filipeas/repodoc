import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListLevelByIDUseCase } from './ListLevelByIDUseCase';

export class ListLevelByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listLevel = container.resolve(ListLevelByIDUseCase);

        const level = await listLevel.run({
            id,
        });

        return response.status(201).json({ level });
    }
}
