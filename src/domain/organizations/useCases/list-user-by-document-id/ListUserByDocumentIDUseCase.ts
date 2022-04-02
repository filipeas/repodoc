import { inject, injectable } from 'tsyringe';

import { BadRequestError } from '@infra/http/errors/BadRequestError';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';
import { IDocumentRepository } from '@domain/documents/repositories/IDocumentRepository';
import { IRequestListUserByDocumentID } from '@domain/organizations/request/IRequestListUserByDocumentID';

@injectable()
export class ListUserByDocumentIDUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
        @inject('DocumentRepository')
        private documentRepository: IDocumentRepository,
    ) { }

    async run({ document_id }: IRequestListUserByDocumentID): Promise<Organization[]> {
        const document = await this.documentRepository.findById(document_id);
        if (!document) {
            throw new BadRequestError('Documento não encontrado');
        }

        const organizations = await this.organizationRepository.findByDocumentId(document_id);

        return organizations;
    }
}
