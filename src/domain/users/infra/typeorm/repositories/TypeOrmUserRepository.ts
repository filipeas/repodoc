import { getRepository, Repository } from 'typeorm';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { ICreateUserDto } from '@domain/users/dtos/ICreateUserDto';
import { User } from '@domain/users/infra/typeorm/entities/User';

export class TypeOrmUserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(data: ICreateUserDto): Promise<User> {
        const user = this.repository.create(data);
        await this.repository.save(user);
        return user;
    }

    async findAll(relations = []): Promise<User[]> {
        return this.repository.find({ relations });
    }

    async findById(id: string, relations = []): Promise<User | undefined> {
        return await this.repository.findOne({
            where: [{ id }, { relations }]
        });
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return await this.repository.findOne({ email });
    }

    async save(user: User): Promise<User> {
        return await this.repository.save(user);
    }

    async delete(user: User): Promise<void> {
        const findUser = await this.repository.findOne(user.id, {
            relations: [],
        });

        if (!findUser) {
            throw new Error('Error');
        }

        await this.repository.softRemove(findUser, {
            data: {
                deleted_at: 'deleted',
            },
        });
    }
}
