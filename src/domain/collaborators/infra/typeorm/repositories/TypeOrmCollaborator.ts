import { getRepository, Repository } from 'typeorm';

import { ICollaboratorRepository } from '@domain/collaborators/repositories/ICollaboratorRepository';

import { ICreateCollaborator } from '@domain/collaborators/dtos/ICreateCollaborator';
import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';

export class TypeOrmCollaborator implements ICollaboratorRepository {
    private repository: Repository<Collaborator>;

    constructor() {
        this.repository = getRepository(Collaborator);
    }

    async create(data: ICreateCollaborator): Promise<Collaborator> {
        const collaborator = this.repository.create(data);
        await this.repository.save(collaborator);
        return collaborator;
    }

    async findByUserId(user_id: string, relations = ['user']): Promise<Collaborator[]> {
        return this.repository.find({
            where: { user_id: user_id }, relations
        });
    }

    async findByOrganizationId(organization_id: string, relations = ['organization']): Promise<Collaborator[]> {
        return this.repository.find({
            where: { organization_id: organization_id }, relations
        });
    }

    async findByUserAndOrganization(user_id: string, organization_id: string): Promise<Collaborator | undefined> {
        return this.repository.findOne({ user_id: user_id, organization_id: organization_id });
    }

    async delete(collaborator: Collaborator): Promise<void> {
        const findcollaborator = await this.repository.findOne(collaborator.id, {
            relations: [],
        });

        if (!findcollaborator) {
            throw new Error('Error');
        }

        await this.repository.remove(collaborator);
    }
}
