import { IRouteRepository } from '@domain/routes/repositories/IRouteRepository';
import { IRequestGetID } from '@domain/routes/request/IRequestGetID';
import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteRouteUseCase {
    constructor(
        @inject('RouteRepository')
        private routeRepository: IRouteRepository
    ) { }

    async run({ id }: IRequestGetID): Promise<void> {
        const route = await this.routeRepository.findByID(id);
        if (!route) {
            throw new BadRequestError('Rota não encontrada.');
        }

        await this.routeRepository.delete(route);
    }
}
