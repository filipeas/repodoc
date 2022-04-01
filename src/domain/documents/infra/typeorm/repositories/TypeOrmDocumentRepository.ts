import { getRepository, Repository } from 'typeorm';

import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';

import { ICreateDocumentDto } from '@domain/documents/dtos/ICreateDocumentDto';
import { Document } from '@domain/documents/infra/typeorm/entities/Document';

export class TypeOrmDocumentRepository implements IDocumentRepository {
    private repository: Repository<Document>;

    constructor() {
        this.repository = getRepository(Document);
    }

    async create(data: ICreateDocumentDto): Promise<Document> {
        const document = this.repository.create(data);
        await this.repository.save(document);
        return document;
    }

    async findById(id: string, relations = []): Promise<Document | undefined> {
        return this.repository.findOne({
            where: [{ id }, { relations }],
        });
    }

    async findBySlug(
        slug: string,
        relations = [],
    ): Promise<Document | undefined> {
        return this.repository.findOne({
            where: [{ slug }, { relations }],
        });
    }

    async save(document: Document): Promise<Document> {
        return this.repository.save(document);
    }

    async delete(document: Document): Promise<void> {
        const findDocument = await this.repository.findOne(document.id, {
            relations: [],
        });

        if (!findDocument) {
            throw new Error('Error');
        }

        await this.repository.remove(document);
    }
}
