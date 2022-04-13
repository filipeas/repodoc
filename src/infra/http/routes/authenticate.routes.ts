import { Router } from 'express';

import { AuthUserController } from '@domain/users/useCases/auth-user/AuthUserController';

const authenticateRouter = Router();

const authUserController = new AuthUserController();

authenticateRouter.post('/', authUserController.handle);

export { authenticateRouter };
