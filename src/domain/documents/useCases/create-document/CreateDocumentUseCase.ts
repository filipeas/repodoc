import { inject, injectable } from 'tsyringe';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IRequestCreateDocument } from '@domain/documents/request/IRequestCreateDocument';
import { IResponseCreateDocument } from '@domain/documents/response/IResponseCreateDocument';
import { generateSlug } from '@infra/utils/generateSlug';

@injectable()
export class CreateDocumentUseCase {
    constructor(
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) {}

    async run({
        title,
        description,
        status,
        privacy,
    }: IRequestCreateDocument): Promise<IResponseCreateDocument> {
        const slug = generateSlug(title);
        const existentDocument = await this.documentRepository.findBySlug(slug);

        if (existentDocument) {
            throw new BadRequestError(
                'Documento já cadastrado com esse título',
            );
        }

        const document = await this.documentRepository.create({
            slug,
            title,
            description,
            status,
            privacy,
        });

        return {
            slug: document.slug,
            title: document.title,
            description: document.description,
            status: document.status,
            privacy: document.privacy,
        };
    }
}
