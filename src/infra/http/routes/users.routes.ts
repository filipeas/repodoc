import { CreateUserController } from '@domain/users/useCases/create-user/CreateUserController';
import { DeleteUserController } from '@domain/users/useCases/delete-user/DeleteUserController';
import { ListUserByEmailController } from '@domain/users/useCases/list-user-by-email/ListUserByEmailController';
import { ListUserByIDController } from '@domain/users/useCases/list-user-by-id/ListUserByIDController';
import { UpdatePasswordController } from '@domain/users/useCases/update-password/UpdatePasswordController';
import { UpdateUserController } from '@domain/users/useCases/update-user/UpdateUserController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import validate from '../middlewares/validation';
import { CreateUserSchema } from '../validations/CreateUserSchema';
import { UpdatePasswordUserSchema } from '../validations/UpdatePasswordUserSchema';
import { UpdateUserSchema } from '../validations/UpdateUserSchema';

const usersRouter = Router();

const createUserController = new CreateUserController();

const listUserByEmail = new ListUserByEmailController();
const listUserByID = new ListUserByIDController();

const updateUser = new UpdateUserController();
const updatePassword = new UpdatePasswordController();

const deleteUserController = new DeleteUserController();

// public routes
usersRouter.post('/', validate(CreateUserSchema), createUserController.handle);

// auth routes
usersRouter.use(ensureAuthenticated);
usersRouter.get('/email/:email', listUserByEmail.handle);
usersRouter.get('/id/:id', listUserByID.handle);
usersRouter.put('/id/:id', validate(UpdateUserSchema), updateUser.handle);
usersRouter.put('/id/:id/edit/password', validate(UpdatePasswordUserSchema), updatePassword.handle);
usersRouter.delete('/id/:id', deleteUserController.handle);

export { usersRouter };
