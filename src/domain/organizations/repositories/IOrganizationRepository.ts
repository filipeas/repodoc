import { ICreateOrganizationDto } from '../dtos/ICreateOrganizationDto';
import { Organization } from '../infra/typeorm/entities/Organization';

export interface IOrganizationRepository {
    create(data: ICreateOrganizationDto): Promise<Organization>;
    findById(id: string, relations?: string[]): Promise<Organization | undefined>;
    findByUserAndSlug(user_id: string, slug: string, relations?: string[]): Promise<Organization | undefined>;
    save(organization: Organization): Promise<Organization>;
    delete(organization: Organization): Promise<void>;
}
