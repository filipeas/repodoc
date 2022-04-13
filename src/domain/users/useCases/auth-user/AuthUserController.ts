import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthUserUseCase } from './AuthUserUseCase';

export class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = container.resolve(AuthUserUseCase);

    const auth = await createUser.run({
      email,
      password,
    });

    return response.status(201).json({ auth });
  }
}
