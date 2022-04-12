import { getRepository, Repository } from 'typeorm';

import { IBodyRepository } from '@domain/bodies/repositories/IBodyRepository';

import { ICreateBodyDto } from '@domain/bodies/dtos/ICreateBodyDto';
import { Body } from '@domain/bodies/infra/typeorm/entities/Body';

export class TypeOrmBodyRepository implements IBodyRepository {
    private repository: Repository<Body>;

    constructor() {
        this.repository = getRepository(Body);
    }

    async create(data: ICreateBodyDto): Promise<Body> {
        const body = this.repository.create(data);
        await this.repository.save(body);
        return body;
    }

    async findById(id: string, relations = []): Promise<Body | undefined> {
        return this.repository.findOne(id, { relations });
    }

    async save(body: Body): Promise<Body> {
        return this.repository.save(body);
    }

    async delete(body: Body): Promise<void> {
        const findBody = await this.repository.findOne(body.id, {
            relations: [],
        });

        if (!findBody) {
            throw new Error('Error');
        }

        await this.repository.remove(body);
    }
}
