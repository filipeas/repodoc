import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LinkUseCase } from './LinkUseCase';

export class LinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, document_id, level_id } = request.body;

        const createOrganization = container.resolve(LinkUseCase);

        const organization = await createOrganization.run({
            user_id, document_id, level_id
        });

        return response.status(201).json({ organization });
    }
}
