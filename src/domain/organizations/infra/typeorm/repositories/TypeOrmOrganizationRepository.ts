import { getRepository, Repository } from 'typeorm';

import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';

import { ICreateOrganizationDto } from '@domain/organizations/dtos/ICreateOrganizationDto';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';

export class TypeOrmOrganizationRepository implements IOrganizationRepository {
    private repository: Repository<Organization>;

    constructor() {
        this.repository = getRepository(Organization);
    }

    async findById(id: string, relations = []): Promise<User | undefined> {
        return await this.repository.findOne({
            where: [{ id, relations }],
        });
    }

    async delete(organization: Organization): Promise<void> {
        const findUser = await this.repository.findOne(organization.id, {
            relations: [],
        });

        if (!findUser) {
            throw new Error('Error');
        }

        await this.repository.softRemove(findUser, {
            data: {
                deleted_at: 'deleted',
            },
        });
    }
}
