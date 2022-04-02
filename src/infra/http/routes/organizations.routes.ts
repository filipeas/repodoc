import { ListAllLevelsController } from '@domain/levels/useCases/list-all/ListAllLevelsController';
import { ListLevelByIDController } from '@domain/levels/useCases/list-level-by-Id/ListLevelByIDController';
import { LinkController } from '@domain/organizations/useCases/link/LinkController';
import { ListDocumentByUserIDController } from '@domain/organizations/useCases/list-document-by-user-id/ListDocumentByUserIDController';
import { ListUserByDocumentIDController } from '@domain/organizations/useCases/list-user-by-document-id/ListUserByDocumentIDController';
import { UnlinkController } from '@domain/organizations/useCases/unlink/UnlinkController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import validate from '../middlewares/validation';
import { CreateOrganizationSchema } from '../validations/CreateOrganizationSchema';
import { DeleteOrganizationSchema } from '../validations/DeleteOrganizationSchema';

const organizationsRouter = Router();

const linkController = new LinkController();
const listDocumentByUserIDController = new ListDocumentByUserIDController();
const listUserByDocumentIDController = new ListUserByDocumentIDController();
const unlinkController = new UnlinkController();

// private routes
organizationsRouter.use(ensureAuthenticated);
organizationsRouter.post('/', validate(CreateOrganizationSchema), linkController.handle);
organizationsRouter.get('/user/:user_id', listDocumentByUserIDController.handle);
organizationsRouter.get('/document/:document_id', listUserByDocumentIDController.handle);
organizationsRouter.delete('/user/:user_id/document/:document_id', validate(DeleteOrganizationSchema), unlinkController.handle);

export { organizationsRouter };
