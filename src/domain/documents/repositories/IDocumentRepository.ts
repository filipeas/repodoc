import { Document } from '@domain/documents/infra/typeorm/entities/Document';
import { ICreateDocumentDto } from '../dtos/ICreateDocumentDto';

export interface IDocumentRepository {
    create(data: ICreateDocumentDto): Promise<Document>;
    findById(id: string, relations?: string[]): Promise<Document | undefined>;
    findBySlug(
        slug: string,
        relations?: string[],
    ): Promise<Document | undefined>;
    findByIDAndSlug(id: string, slug: string): Promise<Document | undefined>;
    save(document: Document): Promise<Document>;
    delete(document: Document): Promise<void>;
}
