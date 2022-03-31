import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListUserByEmailUseCase } from './ListUserByEmailUseCase';

export class ListUserByEmailController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.params;

        const listUser = container.resolve(ListUserByEmailUseCase);

        const user = await listUser.run({
            email,
        });

        return response.status(201).json({ user });
    }
}
