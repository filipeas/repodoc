import { ICreateDocumentDto } from '../dtos/ICreateDocumentDto';
import { Document } from '@domain/documents/infra/typeorm/entities/Document';

export interface IDocumentRepository {
    create(data: ICreateDocumentDto): Promise<Document>;
    findById(id: string, relations?: string[]): Promise<Document | undefined>;
    save(document: Document): Promise<Document>;
    delete(document: Document): Promise<void>;
}
