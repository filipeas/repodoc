import { TypeOrmUserRepository } from "@domain/users/infra/typeorm/repositories/TypeOrmUserRepository";
import { IUserRepository } from "@domain/users/repositories/IUserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
    'UserRepository',
    TypeOrmUserRepository,
);
