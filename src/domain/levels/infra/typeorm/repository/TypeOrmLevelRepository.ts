import { getRepository, Repository } from 'typeorm';

import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';

import { Level } from '@domain/levels/infra/typeorm/entities/Level';

export class TypeOrmLevelRepository implements ILevelRepository {
    private repository: Repository<Level>;

    constructor() {
        this.repository = getRepository(Level);
    }

    async findAll(relations = []): Promise<Level[]> {
        return this.repository.find({ relations });
    }

    async findById(id: string, relations = []): Promise<Level | undefined> {
        return await this.repository.findOne({
            where: [{ id }, { relations }]
        });
    }
}
