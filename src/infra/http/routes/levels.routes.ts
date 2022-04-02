import { ListAllLevelsController } from '@domain/levels/useCases/list-all/ListAllLevelsController';
import { ListLevelByIDController } from '@domain/levels/useCases/list-level-by-Id/ListLevelByIDController';
import { Router } from 'express';

const levelsRouter = Router();

const listAllLevelsController = new ListAllLevelsController();
const listLevelByIDController = new ListLevelByIDController();

// private routes
levelsRouter.get('/', listAllLevelsController.handle);
levelsRouter.get('/id/:id', listLevelByIDController.handle);

export { levelsRouter };
