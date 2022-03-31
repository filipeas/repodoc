import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllUserUseCase } from './ListAllUserUseCase';

export class ListAllUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsers = container.resolve(ListAllUserUseCase);

        const users = await listUsers.run();

        return response.status(201).json({ users });
    }
}
