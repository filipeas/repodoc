import { inject, injectable } from 'tsyringe';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestDeleteDocument } from '@domain/documents/request/IRequestDeleteDocument';

@injectable()
export class DeleteDocumentUseCase {
    constructor(
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) {}

    async run({ id, slug }: IRequestDeleteDocument): Promise<void> {
        const document = await this.documentRepository.findByIDAndSlug(
            id,
            slug,
        );
        if (!document) {
            throw new BadRequestError('Documento inexistente');
        }

        await this.documentRepository.delete(document);
    }
}
