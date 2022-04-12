import { Route } from '@domain/routes/infra/typeorm/entities/Route';
import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { IRequestGetID } from '@domain/routes/request/IRequestGetID';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindRouteByIDUseCase {
    constructor(
        @inject('RouteRepository')
        private routeRepository: IRouteRepository
    ) { }

    async run({ id }: IRequestGetID): Promise<Route> {
        const route = await this.routeRepository.findByID(id);
        if (!route) {
            throw new BadRequestError('Rota não encontrada.');
        }

        return route;
    }
}
