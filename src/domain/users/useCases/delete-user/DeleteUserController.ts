import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';

export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteUser = container.resolve(DeleteUserUseCase);

        const user = await deleteUser.run({
            id,
        });

        return response.status(201).json({ user });
    }
}
