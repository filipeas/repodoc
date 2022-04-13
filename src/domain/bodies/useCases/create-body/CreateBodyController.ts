import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { CreateBodyUseCase } from './CreateBodyUseCase';

        export class CreateBodyController {
            async handle(request: Request, response: Response): Promise<Response> {
                // const {  } = request.body;

                const createBody = container.resolve(CreateBodyUseCase);

                const body = await createBody.run({});

                return response.status(201).json({ body });
            }
        }
        