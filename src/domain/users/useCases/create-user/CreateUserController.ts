import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createUser = container.resolve(CreateUserUseCase);

        const user = await createUser.run({
            name,
            email,
            password,
        });

        return response.status(201).json({ user });
    }
}
