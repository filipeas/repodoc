import { getRepository, Repository } from 'typeorm';

import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';

import { ICreateOrganizationDto } from '@domain/organizations/dtos/ICreateOrganizationDto';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';

export class TypeOrmOrganizationRepository implements IOrganizationRepository {
    private repository: Repository<Organization>;

    constructor() {
        this.repository = getRepository(Organization);
    }

    async create(data: ICreateOrganizationDto): Promise<Organization> {
        const user = this.repository.create(data);
        await this.repository.save(user);
        return user;
    }

    async findByUserId(user_id: string, relations = ['user']): Promise<Organization[]> {
        return await this.repository.find({
            where: { user_id }, relations
        });
    }

    async findByDocumentId(document_id: string, relations = ['document']): Promise<Organization[]> {
        return await this.repository.find({
            where: { document_id }, relations
        });
    }

    async findByUserAndDocument(user_id: string, document_id: string): Promise<Organization | undefined> {
        return await this.repository.findOne({ user_id: user_id, document_id: document_id });
    }

    async findByUserAndDocumentAndLevel(user_id: string, document_id: string, level_id: string): Promise<Organization | undefined> {
        return await this.repository.findOne({ user_id: user_id, document_id: document_id, level_id: level_id });
    }

    async delete(organization: Organization): Promise<void> {
        const findOrganization = await this.repository.findOne(organization.id, {
            relations: [],
        });

        if (!findOrganization) {
            throw new Error('Error');
        }

        await this.repository.delete(findOrganization);
    }
}
