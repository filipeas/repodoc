import { ICreateOrganizationDto } from '../dtos/ICreateOrganizationDto';
import { Organization } from '../infra/typeorm/entities/Organization';

export interface IOrganizationRepository {
    create(data: ICreateOrganizationDto): Promise<Organization>;
    findByUserId(user_id: string, relations?: string[]): Promise<Organization[]>;
    findByDocumentId(
        document_id: string,
        relations?: string[],
    ): Promise<Organization[]>;
    findByUserAndDocument(
        user_id: string,
        document_id: string,
    ): Promise<Organization | undefined>;
    delete(organization: Organization): Promise<void>;
}
