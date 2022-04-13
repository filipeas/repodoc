import { ICreateUserDto } from '../dtos/ICreateUserDto';
import { User } from '@domain/users/infra/typeorm/entities/User';

export interface IUserRepository {
    create(data: ICreateUserDto): Promise<User>;
    findAll(relations?: string[]): Promise<User[]>;
    findById(id: string, relations?: string[]): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
    save(user: User): Promise<User>;
    delete(user: User): Promise<void>;
}
