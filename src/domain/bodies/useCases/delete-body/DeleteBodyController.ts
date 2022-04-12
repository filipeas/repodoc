import { Request, Response } from 'express';
        import { container } from 'tsyringe';
        import { DeleteBodyUseCase } from './DeleteBodyUseCase';

        export class DeleteBodyController {
            async handle(request: Request, response: Response): Promise<Response> {
                // const { id } = request.params;

                const DeleteBody = container.resolve(DeleteBodyUseCase);

                const body = await DeleteBody.run({id});

                return response.status(201).json({ body });
            }
        }
        