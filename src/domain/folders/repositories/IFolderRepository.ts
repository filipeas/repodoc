import { ICreateFolderDto } from '../dtos/ICreateFolderDto';
import { Folder } from '../infra/typeorm/entities/Folder';

export interface IFolderRepository {
    create(data: ICreateFolderDto): Promise<Folder>;
    findById(id: string, relations?: string[]): Promise<Folder | undefined>;
    findBySlug(slug: string, relations?: string[]): Promise<Folder | undefined>;
    findByDocumentId(
        document_id: string,
        relations?: string[],
    ): Promise<Folder[]>;
    save(folder: Folder): Promise<Folder>;
    delete(folder: Folder): Promise<void>;
}
