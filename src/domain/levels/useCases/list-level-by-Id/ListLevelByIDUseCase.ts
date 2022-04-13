import { inject, injectable } from 'tsyringe';

import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';
import { IRequestListLevelByID } from '@domain/levels/request/IRequestListLevelByID';
import { IResponseAllLevels } from '@domain/levels/response/IResponseAllLevels';
import { BadRequestError } from '@infra/http/errors/BadRequestError';

@injectable()
export class ListLevelByIDUseCase {
    constructor(
        @inject('LevelRepository')
        private levelRepository: ILevelRepository,
    ) { }

    async run({ id }: IRequestListLevelByID): Promise<IResponseAllLevels> {
        const level = await this.levelRepository.findById(id);

        if (!level) {
            throw new BadRequestError('Nível não encontrado');
        }

        return {
            id: level.id,
            title: level.title,
            level: level.level,
        };
    }
}
