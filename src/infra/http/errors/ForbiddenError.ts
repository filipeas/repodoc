import { AppError } from './AppError';

export class ForbiddenError extends AppError {
  constructor(message: string) {
    super(message, 403, 'forbidden_error');
  }
}
