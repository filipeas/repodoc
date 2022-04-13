import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { AuthBodyUseCase } from './AuthBodyUseCase';

        export class AuthBodyController {
            async handle(request: Request, response: Response): Promise<Response> {
                // const {  } = request.body;
                // const { id } = request.params;

                const AuthBody = container.resolve(AuthBodyUseCase);

                const body = await AuthBody.run({id});

                return response.status(201).json({ body });
            }
        }
        