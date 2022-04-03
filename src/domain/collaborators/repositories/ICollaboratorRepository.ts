import { Collaborator } from '@domain/collaborators/infra/typeorm/entities/Collaborator';
import { ICreateCollaborator } from '../dtos/ICreateCollaborator';

export interface ICollaboratorRepository {
    create(data: ICreateCollaborator): Promise<Collaborator>;
    findByUserId(user_id: string): Promise<Collaborator[]>;
    findByOrganizationId(organization_id: string): Promise<Collaborator[]>;
    findByUserAndOrganization(user_id: string, organization_id: string): Promise<Collaborator | undefined>;
    delete(collaborator: Collaborator): Promise<void>;
}
