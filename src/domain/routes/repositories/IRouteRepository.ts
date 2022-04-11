import { Route } from '@domain/routes/infra/typeorm/entities/Route';
import { ICreateRoute } from '../dtos/ICreateRoute';

export interface IRouteRepository {
    create(data: ICreateRoute): Promise<Route>;
    findByID(id: string): Promise<Route | undefined>;
    findByDocumentID(document_id: string, relations?: string[]): Promise<Route[]>;
    findByFolderID(folder_id: string, relations?: string[]): Promise<Route[]>;
    save(route: Route): Promise<Route>;
    delete(route: Route): Promise<void>;
}
