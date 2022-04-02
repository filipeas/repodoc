import { container } from 'tsyringe';

import { TypeOrmUserRepository } from '@domain/users/infra/typeorm/repositories/TypeOrmUserRepository';
import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { TypeOrmDocumentRepository } from '@domain/documents/infra/typeorm/repositories/TypeOrmDocumentRepository';
import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';
import { TypeOrmLevelRepository } from '@domain/levels/infra/typeorm/repository/TypeOrmLevelRepository';

container.registerSingleton<IUserRepository>(
    'UserRepository',
    TypeOrmUserRepository,
);

container.registerSingleton<IDocumentRepository>(
    'DocumentRepository',
    TypeOrmDocumentRepository,
);

container.registerSingleton<ILevelRepository>(
    'LevelRepository',
    TypeOrmLevelRepository,
);
