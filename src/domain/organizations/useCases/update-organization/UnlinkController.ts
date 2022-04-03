import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UnlinkUseCase } from './UnlinkUseCase';

export class UnlinkController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, document_id } = request.params;

        const createOrganization = container.resolve(UnlinkUseCase);

        const organization = await createOrganization.run({
            user_id, document_id
        });

        return response.status(201).json({ organization });
    }
}
