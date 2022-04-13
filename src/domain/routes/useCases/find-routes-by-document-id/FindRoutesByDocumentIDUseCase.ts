import { Route } from '@domain/routes/infra/typeorm/entities/Route';
import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { IRequestGetByDocumentID } from '@domain/routes/request/IRequestGetByDocumentID';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindRoutesByDocumentIDUseCase {
    constructor(
        @inject('RouteRepository')
        private routeRepository: IRouteRepository
    ) { }

    async run({ document_id }: IRequestGetByDocumentID): Promise<Route[]> {
        const routes = await this.routeRepository.findByDocumentID(document_id);
        if (!routes) {
            throw new BadRequestError('Rota não encontrada.');
        }

        return routes;
    }
}
