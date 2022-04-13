import { inject, injectable } from 'tsyringe';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestListDocumentByID } from '@domain/documents/request/IRequestListDocumentByID';
import { IResponseListDocumentByID } from '@domain/documents/response/IResponseListDocumentByID';

@injectable()
export class ListDocumentByIDUseCase {
    constructor(
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) { }

    async run({ id }: IRequestListDocumentByID): Promise<IResponseListDocumentByID> {
        const document = await this.documentRepository.findById(
            id
        );
        if (!document) {
            throw new BadRequestError('Documento inexistente');
        }

        return document;
    }
}
