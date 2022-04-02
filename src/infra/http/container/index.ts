import { container } from 'tsyringe';

import { TypeOrmUserRepository } from '@domain/users/infra/typeorm/repositories/TypeOrmUserRepository';
import { IUserRepository } from '@domain/users/repositories/IUserRepository';
import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { TypeOrmDocumentRepository } from '@domain/documents/infra/typeorm/repositories/TypeOrmDocumentRepository';
import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';
import { TypeOrmLevelRepository } from '@domain/levels/infra/typeorm/repository/TypeOrmLevelRepository';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { TypeOrmOrganizationRepository } from '@domain/organizations/infra/typeorm/repositories/TypeOrmOrganizationRepository';
import { IFolderRepository } from '@domain/folders/repositories/IFolderRepository';
import { TypeOrmFolderRepository } from '@domain/folders/infra/typeorm/repositories/TypeOrmFolderRepository';

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

container.registerSingleton<IOrganizationRepository>(
    'OrganizationRepository',
    TypeOrmOrganizationRepository,
);

container.registerSingleton<IFolderRepository>(
    'FolderRepository',
    TypeOrmFolderRepository,
);
