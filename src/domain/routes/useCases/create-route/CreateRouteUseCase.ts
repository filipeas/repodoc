import { Route } from '@domain/routes/infra/typeorm/entities/Route';
import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { IRequestCreateRoute } from '@domain/routes/request/IRequestCreateRoute';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { generateSlug } from '@infra/utils/generateSlug';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateRouteUseCase {
    constructor(
        @inject('RouteRepository')
        private routeRepository: IRouteRepository
    ) { }

    async run({ document_id, folder_id, title, description, url, type_request }: IRequestCreateRoute): Promise<Route> {
        const slug = generateSlug(title);

        const existentRoute = await this.routeRepository.findRouteByDocumentIDFolderIDAndSlug(document_id, folder_id, slug);
        if (existentRoute) {
            throw new BadRequestError('Rota já criada para esse documento e para essa pasta.');
        }

        const route = await this.routeRepository.create({ document_id, folder_id, title, slug, description, url, type_request });

        return route;
    }
}
