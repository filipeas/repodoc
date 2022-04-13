import { ListAllLevelsController } from '@domain/levels/useCases/list-all/ListAllLevelsController';
import { ListLevelByIDController } from '@domain/levels/useCases/list-level-by-Id/ListLevelByIDController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const levelsRouter = Router();

const listAllLevelsController = new ListAllLevelsController();
const listLevelByIDController = new ListLevelByIDController();

// private routes
levelsRouter.use(ensureAuthenticated);
levelsRouter.get('/', listAllLevelsController.handle);
levelsRouter.get('/id/:id', listLevelByIDController.handle);

export { levelsRouter };
