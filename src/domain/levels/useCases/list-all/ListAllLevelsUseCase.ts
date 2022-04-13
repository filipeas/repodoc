import { inject, injectable } from 'tsyringe';

import { IResponseAllLevels } from '@domain/levels/response/IResponseAllLevels';
import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';

@injectable()
export class ListAllLevelsUseCase {
    constructor(
        @inject('LevelRepository')
        private levelRepository: ILevelRepository,
    ) { }

    async run(): Promise<IResponseAllLevels[]> {
        const levels = await this.levelRepository.findAll();

        return levels.map(level => ({
            id: level.id,
            title: level.title,
            level: level.level,
        }));
    }
}
