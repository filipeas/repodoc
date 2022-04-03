import { CreateOrganizationController } from '@domain/organizations/useCases/create-organization/CreateOrganizationController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import validate from '../middlewares/validation';
import { CreateOrganizationSchema } from '../validations/CreateOrganizationSchema';

const organizationsRouter = Router();

const createOrganizationController = new CreateOrganizationController();

// private routes
organizationsRouter.use(ensureAuthenticated);
organizationsRouter.post('/', validate(CreateOrganizationSchema), createOrganizationController.handle);
// organizationsRouter.get('/user/:user_id', listDocumentByUserIDController.handle);
// organizationsRouter.get('/document/:document_id', listUserByDocumentIDController.handle);
// organizationsRouter.delete('/user/:user_id/document/:document_id', unlinkController.handle);

export { organizationsRouter };
