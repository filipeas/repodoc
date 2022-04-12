import { Route } from '@domain/routes/infra/typeorm/entities/Route';
import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { IRequestGetByFolderID } from '@domain/routes/request/IRequestGetByFolderID';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindRoutesByFolderIDUseCase {
    constructor(
        @inject('RouteRepository')
        private routeRepository: IRouteRepository
    ) { }

    async run({ folder_id }: IRequestGetByFolderID): Promise<Route[]> {
        const routes = await this.routeRepository.findByFolderID(folder_id);
        if (!routes) {
            throw new BadRequestError('Rota não encontrada.');
        }

        return routes;
    }
}
