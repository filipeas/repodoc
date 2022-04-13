import { Body } from '@domain/bodies/infra/typeorm/entities/Body';
import { ICreateBodyDto } from '../dtos/ICreateBodyDto';

export interface IBodyRepository {
    create(data: ICreateBodyDto): Promise<Body>;
    findById(id: string, relations?: string[]): Promise<Body | undefined>;
    findByDocumentID(document_id: string, relations?: string[]): Promise<Body[]>;
    findByFolderID(folder_id: string, relations?: string[]): Promise<Body[]>;
    findByRouteID(route_id: string, relations?: string[]): Promise<Body[]>;
    findBodyByDocumentIDFolderIDRouteIDAndSlug(document_id: string, folder_id: string, route_id: string, slug: string): Promise<Body | undefined>;
    save(body: Body): Promise<Body>;
    delete(body: Body): Promise<void>;
}
