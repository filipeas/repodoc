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

    async findById(id: string, relations = []): Promise<Organization | undefined> {
        return await this.repository.findOne(id, { relations });
    }

    async findByUserAndSlug(user_id: string, slug: string, relations = []): Promise<Organization | undefined> {
        return await this.repository.findOne({ user_id, slug: slug });
    }

    async save(organization: Organization): Promise<Organization> {
        return await this.repository.save(organization);
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
