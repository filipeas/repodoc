import { Level } from '@domain/levels/infra/typeorm/entities/Level';

export interface ILevelRepository {
    findAll(relations?: string[]): Promise<Level[]>;
    findById(id: string, relations?: string[]): Promise<Level | undefined>;
}
