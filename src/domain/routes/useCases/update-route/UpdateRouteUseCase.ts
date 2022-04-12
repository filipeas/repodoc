import { Route } from '@domain/routes/infra/typeorm/entities/Route';
import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { IRequestUpdateRoute } from '@domain/routes/request/IRequestUpdateRoute';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { generateSlug } from '@infra/utils/generateSlug';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateRouteUseCase {
    constructor(
        @inject('RouteRepository')
        private routeRepository: IRouteRepository
    ) { }

    async run({ id, document_id, folder_id, title, description, url, type_request }: IRequestUpdateRoute): Promise<Route> {
        const slug = generateSlug(title);

        const route = await this.routeRepository.findRouteByDocumentIDFolderIDAndSlug(document_id, folder_id, slug);
        if (!route || route.id !== id) {
            throw new BadRequestError('Rota não encontrada');
        }

        Object.assign(route, {
            document_id,
            folder_id,
            title,
            description,
            url,
            type_request,
        });

        await this.routeRepository.save(route);

        return route;
    }
}
