import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllLevelsUseCase } from './ListAllLevelsUseCase';

export class ListAllLevelsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsers = container.resolve(ListAllLevelsUseCase);

        const levels = await listUsers.run();

        return response.status(201).json({ levels });
    }
}
