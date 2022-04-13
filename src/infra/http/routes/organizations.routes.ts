import { CreateOrganizationController } from '@domain/organizations/useCases/create-organization/CreateOrganizationController';
import { ListOrganizationByUserIDController } from '@domain/organizations/useCases/list-organization-by-user-id/ListOrganizationByUserIDController';
import { UpdateOrganizationController } from '@domain/organizations/useCases/update-organization/UpdateOrganizationController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import validate from '../middlewares/validation';
import { CreateOrganizationSchema } from '../validations/CreateOrganizationSchema';

const organizationsRouter = Router();

const createOrganizationController = new CreateOrganizationController();
const listOrganizationByUserIDController = new ListOrganizationByUserIDController();
const updateOrganizationController = new UpdateOrganizationController();

// private routes
organizationsRouter.use(ensureAuthenticated);
organizationsRouter.post('/', validate(CreateOrganizationSchema), createOrganizationController.handle);
organizationsRouter.get('/user/:user_id', listOrganizationByUserIDController.handle);
organizationsRouter.put('/organization/:organization_id', validate(CreateOrganizationSchema), updateOrganizationController.handle);

export { organizationsRouter };
