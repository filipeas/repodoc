import { inject, injectable } from 'tsyringe';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { IResponseListDocumentByID } from '@domain/documents/response/IResponseListDocumentByID';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestListDocumentByID } from '@domain/documents/request/IRequestListDocumentByID';

@injectable()
export class ListDocumentByIDUseCase {
    constructor(
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) {}

    async run({
        id,
    }: IRequestListDocumentByID): Promise<IResponseListDocumentByID> {
        const document = await this.documentRepository.findById(id);

        if (!document) {
            throw new BadRequestError('Documento não encontrado');
        }

        return {
            id: document.id,
            title: document.title,
            slug: document.slug,
            description: document.description,
            created_at: document.created_at,
        };
    }
}
