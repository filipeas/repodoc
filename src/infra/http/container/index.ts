import { container } from "tsyringe";

import { TypeOrmUserRepository } from "@domain/users/infra/typeorm/repositories/TypeOrmUserRepository";
import { IUserRepository } from "@domain/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
    'UserRepository',
    TypeOrmUserRepository,
);
