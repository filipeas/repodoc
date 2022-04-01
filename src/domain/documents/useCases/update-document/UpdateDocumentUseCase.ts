import { inject, injectable } from 'tsyringe';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestCreateDocument } from '@domain/documents/request/IRequestCreateDocument';
import { IResponseCreateDocument } from '@domain/documents/response/IResponseCreateDocument';
import { generateSlug } from '@infra/utils/generateSlug';
import { IRequestUpdateDocument } from '@domain/documents/request/IRequestUpdateDocument';

@injectable()
export class UpdateDocumentUseCase {
    constructor(
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) { }

    async run({
        id,
        title,
        description,
        status,
        privacy,
    }: IRequestUpdateDocument): Promise<IResponseCreateDocument> {
        const slug = generateSlug(title);
        const document = await this.documentRepository.findByIDAndSlug(id, slug);
        if (document) {
            throw new BadRequestError(
                'Documento já cadastrado com esse título',
            );
        }

        Object.assign(document, {
            slug,
            title,
            description,
            status,
            privacy,
        });

        return await this.documentRepository.save(document!);
    }
}
