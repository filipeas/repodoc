import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@domain/users/repositories/IUserRepository';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { IRequestDeleteUnlink } from '@domain/organizations/request/IRequestDeleteUnlink';

@injectable()
export class UnlinkUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) { }

    async run({ user_id, document_id }: IRequestDeleteUnlink): Promise<void> {
        const existentUser = await this.userRepository.findById(user_id);
        if (existentUser) {
            throw new BadRequestError('Usuário não encontrado');
        }

        const existentDocument = await this.documentRepository.findById(document_id);
        if (existentDocument) {
            throw new BadRequestError('Documento não encontrado');
        }

        const organization = await this.organizationRepository.findByUserAndDocument(user_id, document_id);
        if (!organization) {
            throw new BadRequestError('Vínculo entre esse usuário e esse documento não encontrado');
        }

        await this.organizationRepository.delete(organization);
    }
}
