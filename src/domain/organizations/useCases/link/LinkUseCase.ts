import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { ILevelRepository } from '@domain/levels/repositories/ILevelRepository';
import { IRequestCreateLink } from '@domain/organizations/request/IRequestCreateLink';
import { IResponseCreateLink } from '@domain/organizations/response/IResponseCreateLink';

@injectable()
export class LinkUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
        @inject('LevelRepository')
        private levelRepository: ILevelRepository
    ) { }

    async run({ user_id, document_id, level_id }: IRequestCreateLink): Promise<IResponseCreateLink> {
        const existentUser = await this.userRepository.findById(user_id);

        if (existentUser) {
            throw new BadRequestError('Usuário não encontrado');
        }

        const existentDocument = await this.documentRepository.findById(document_id);

        if (existentDocument) {
            throw new BadRequestError('Documento não encontrado');
        }

        const existentLevel = await this.levelRepository.findById(level_id);

        if (existentLevel) {
            throw new BadRequestError('Nível de acesso não encontrado');
        }

        const organization = await this.organizationRepository.create({
            user_id,
            document_id,
            level_id
        });

        return {
            user: organization.user,
            document: organization.document,
            level: organization.level,
        };
    }
}
