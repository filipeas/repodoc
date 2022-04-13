import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

export class UpdatePasswordController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { c_password, new_password } = request.body;

        const editPasswordUser = container.resolve(UpdatePasswordUseCase);

        const user = await editPasswordUser.run({
            id,
            c_password,
            new_password,
        });

        return response.status(201).json({ user });
    }
}
