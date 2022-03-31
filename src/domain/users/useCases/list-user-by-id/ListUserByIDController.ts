import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserByIDUseCase } from './ListUserByIDUseCase';

export class ListUserByIDController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listUser = container.resolve(ListUserByIDUseCase);

        const user = await listUser.run({
            id,
        });

        return response.status(201).json({ user });
    }
}
