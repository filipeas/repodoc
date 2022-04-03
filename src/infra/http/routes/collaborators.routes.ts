import { CreateCollaboratorController } from '@domain/collaborators/useCases/create-collaborator/CreateCollaboratorController';
import { DeleteCollaboratorController } from '@domain/collaborators/useCases/delete-collaborator/DeleteCollaboratorController';
import { ListCollaboratorByOrganizationIDController } from '@domain/collaborators/useCases/list-collaborator-by-organization-id/ListCollaboratorByOrganizationIDController';
import { ListCollaboratorByUserIDController } from '@domain/collaborators/useCases/list-collaborator-by-user-id/ListCollaboratorByUserIDController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const collaboratorsRouter = Router();

const createCollaboratorController = new CreateCollaboratorController();
const listCollaboratorByOrganizationIDController = new ListCollaboratorByOrganizationIDController();
const listCollaboratorByUserIDController = new ListCollaboratorByUserIDController();
const deleteCollaboratorController = new DeleteCollaboratorController();

// private routes
collaboratorsRouter.use(ensureAuthenticated);
collaboratorsRouter.post('/', createCollaboratorController.handle);
collaboratorsRouter.get('/organization/:organization_id', listCollaboratorByOrganizationIDController.handle);
collaboratorsRouter.get('/user/:user_id', listCollaboratorByUserIDController.handle);
collaboratorsRouter.delete('/user/:user_id/organization/:organization_id', deleteCollaboratorController.handle);

export { collaboratorsRouter };
