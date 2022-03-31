import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;

        const editUser = container.resolve(UpdateUserUseCase);

        const user = await editUser.run({
            id,
            name,
        });

        return response.status(201).json({ user });
    }
}
