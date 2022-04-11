import { Folder } from '@domain/folders/infra/typeorm/entities/Folder';
import { ICreateRoute } from '@domain/routes/dtos/ICreateRoute';
import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { getRepository, Repository } from 'typeorm';
import { Route } from '../entities/Route';

export class TypeOrmRouteRepository implements IRouteRepository {
    private repository: Repository<Route>;

    constructor() {
        this.repository = getRepository(Route);
    }

    async create(data: ICreateRoute): Promise<Route> {
        const route = this.repository.create(data);
        await this.repository.save(route);
        return route;
    }

    async findByID(id: string): Promise<Route | undefined> {
        return this.repository.findOne({ id });
    }

    async findByDocumentID(document_id: string, relations = []): Promise<Route[]> {
        return await this.repository.find({
            where: { document_id: document_id }, relations
        });
    }

    async findByFolderID(folder_id: string, relations = []): Promise<Route[]> {
        return await this.repository.find({
            where: { folder_id: folder_id }, relations
        });
    }

    async save(route: Route): Promise<Route> {
        return await this.repository.save(route);
    }

    async delete(route: Route): Promise<void> {
        const findRoute = await this.repository.findOne(route.id, {
            relations: [],
        });

        if (!findRoute) {
            throw new Error('Error');
        }

        await this.repository.delete(findRoute);
    }


}
