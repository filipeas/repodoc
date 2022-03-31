import { CreateUserController } from '@domain/users/useCases/create-user/CreateUserController';
import { DeleteUserController } from '@domain/users/useCases/delete-user/DeleteUserController';
import { ListAllUserController } from '@domain/users/useCases/list-all-user/ListAllUserController';
import { ListUserByEmailController } from '@domain/users/useCases/list-user-by-email/ListUserByEmailController';
import { ListUserByIDController } from '@domain/users/useCases/list-user-by-id/ListUserByIDController';
import { UpdatePasswordController } from '@domain/users/useCases/update-password/UpdatePasswordController';
import { UpdateUserController } from '@domain/users/useCases/update-user/UpdateUserController';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const listAllUserController = new ListAllUserController();
const listUserByEmail = new ListUserByEmailController();
const listUserByID = new ListUserByIDController();
const updatePassword = new UpdatePasswordController();
const updateUser = new UpdateUserController();

// public routes
usersRouter.post('/', createUserController.handle);

// auth routes
usersRouter.use(ensureAuthenticated);
usersRouter.delete('/', deleteUserController.handle);
usersRouter.get('/', listAllUserController.handle);
usersRouter.get('/email/:email', listUserByEmail.handle);
usersRouter.get('/id/:id', listUserByID.handle);
usersRouter.put('/id/:id/edit/password', updatePassword.handle);
usersRouter.put('/id/:id', updateUser.handle);

export { usersRouter };
