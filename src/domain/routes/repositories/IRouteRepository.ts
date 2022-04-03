import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';
import { ICreateRoute } from '../dtos/ICreateRoute';

export interface IRouteRepository {
    create(data: ICreateRoute): Promise<Folder>;
    findByID(id: string): Promise<Folder | undefined>;
    findByDocumentID(document_id: string): Promise<Folder[]>;
    findByFolderID(folder_id: string): Promise<Folder[]>;
    save(folder: Folder): Promise<Folder>;
    delete(folder: Folder): Promise<void>;
}
