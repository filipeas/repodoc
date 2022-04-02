import { User } from '@domain/users/infra/typeorm/entities/User';

export interface IOrganizationRepository {
    findByUserId(user_id: string, relations?: string[]): Promise<User[]>;
    findByDocumentId(
        document_id: string,
        relations?: string[],
    ): Promise<Document[]>;
}
