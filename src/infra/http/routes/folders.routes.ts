import { CreateFolderController } from '@domain/folders/useCases/create-folder/CreateFolderController';
import { DeleteFolderController } from '@domain/folders/useCases/delete-folder/DeleteFolderController';
import { FindFolderByDocumentIDController } from '@domain/folders/useCases/find-folder-by-document-id/FindFolderByDocumentIDController';
import { FindFolderByIDController } from '@domain/folders/useCases/find-folder-by-id/FindFolderByIDController';
import { UpdateFolderController } from '@domain/folders/useCases/update-folder/UpdateFolderController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import validate from '../middlewares/validation';
import { CreateFolderSchema } from '../validations/CreateFolderSchema';
import { UpdateFolderSchema } from '../validations/UpdateFolderSchema';

const foldersRouter = Router();

const createFolderController = new CreateFolderController();
const findFolderByDocumentIDController = new FindFolderByDocumentIDController();
const findFolderByIDController = new FindFolderByIDController();
const updateFolderController = new UpdateFolderController();
const deleteFolderController = new DeleteFolderController();

// private routes
foldersRouter.use(ensureAuthenticated);
foldersRouter.post('/', validate(CreateFolderSchema), createFolderController.handle);
foldersRouter.get('/document/:document_id', findFolderByDocumentIDController.handle);
foldersRouter.get('/id/:id', findFolderByIDController.handle);
foldersRouter.put('/id/:id', validate(UpdateFolderSchema), updateFolderController.handle);
foldersRouter.delete('/id/:id', deleteFolderController.handle);

export { foldersRouter };
