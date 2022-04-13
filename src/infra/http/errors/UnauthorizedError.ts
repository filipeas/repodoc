import { AppError } from './AppError';

type TypeError = 'auth_error' | 'expired_error';

export class UnauthozitedError extends AppError {
  constructor(message: string, type_error: TypeError = 'auth_error') {
    super(message, 401, type_error);
  }
}
