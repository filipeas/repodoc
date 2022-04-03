import { inject, injectable } from 'tsyringe';

import { IRequestUserID } from '@domain/users/request/IRequestUserID';
import { IOrganizationRepository } from '@domain/organizations/repositories/IOrganizationRepository';
import { Organization } from '@domain/organizations/infra/typeorm/entities/Organization';

@injectable()
export class ListMyOrganizationUseCase {
    constructor(
        @inject('OrganizationRepository')
        private organizationRepository: IOrganizationRepository,
    ) { }

    async run({ id }: IRequestUserID): Promise<Organization[]> {
        const organizations = await this.organizationRepository.findByUserID(id);

        return organizations;
    }
}
