import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { UpdateBodyUseCase } from './UpdateBodyUseCase';

        export class UpdateBodyController {
            async handle(request: Request, response: Response): Promise<Response> {
                // const {  } = request.body;
                // const { id } = request.params;

                const updateBody = container.resolve(UpdateBodyUseCase);

                const body = await updateBody.run({id});

                return response.status(201).json({ body });
            }
        }
        