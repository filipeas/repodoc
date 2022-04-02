import { CreateDocumentController } from '@domain/documents/useCases/create-document/CreateDocumentController';
import { DeleteDocumentController } from '@domain/documents/useCases/delete-document/DeleteDocumentController';
import { ListDocumentByIDController } from '@domain/documents/useCases/list-document-by-id/ListDocumentByIDController';
import { UpdateDocumentController } from '@domain/documents/useCases/update-document/UpdateDocumentController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import validate from '../middlewares/validation';
import { CreateDocumentSchema } from '../validations/CreateDocumentSchema';
import { UpdateDocumentSchema } from '../validations/UpdateDocumentSchema';

const documentsRouter = Router();

const createDocumentController = new CreateDocumentController();
const listDocumentByIDController = new ListDocumentByIDController();
const updateDocumentController = new UpdateDocumentController();
const deleteDocumentController = new DeleteDocumentController();

// private routes
documentsRouter.use(ensureAuthenticated);
documentsRouter.post('/', validate(CreateDocumentSchema), createDocumentController.handle);
documentsRouter.get('/id/:id', listDocumentByIDController.handle);
documentsRouter.put('/id/:id', validate(UpdateDocumentSchema), updateDocumentController.handle);
documentsRouter.delete('/id/:id', deleteDocumentController.handle);

export { documentsRouter };
