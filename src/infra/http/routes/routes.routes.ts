import { CreateRouteController } from '@domain/routes/useCases/create-route/CreateRouteController';
import { DeleteRouteController } from '@domain/routes/useCases/delete-route/DeleteRouteController';
import { FindRouteByIDController } from '@domain/routes/useCases/find-route-by-id/FindRouteByIDController';
import { FindRoutesByDocumentIDController } from '@domain/routes/useCases/find-routes-by-document-id/FindRoutesByDocumentIDController';
import { FindRoutesByFolderIDController } from '@domain/routes/useCases/find-routes-by-folder-id/FindRoutesByFolderIDController';
import { UpdateRouteController } from '@domain/routes/useCases/update-route/UpdateRouteController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import validate from '../middlewares/validation';
import { CreateRouteSchema } from '../validations/CreateRouteSchema';

const routesRouter = Router();

const createRouteController = new CreateRouteController();
const findRouteByIDController = new FindRouteByIDController();
const findRoutesByDocumentIDController = new FindRoutesByDocumentIDController();
const findRoutesByFolderIDController = new FindRoutesByFolderIDController();
const updateRouteController = new UpdateRouteController();
const deleteRouteController = new DeleteRouteController();

// private routes
routesRouter.use(ensureAuthenticated);
routesRouter.post('/', validate(CreateRouteSchema), createRouteController.handle);
routesRouter.get('/id/:id', findRouteByIDController.handle);
routesRouter.get('/document/:document_id', findRoutesByDocumentIDController.handle);
routesRouter.get('/folder/:folder_id', findRoutesByFolderIDController.handle);
routesRouter.put('/id/:id', validate(CreateRouteSchema), updateRouteController.handle);
routesRouter.delete('/id/:id', deleteRouteController.handle);

export { routesRouter };
