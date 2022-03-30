import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(message, 404, 'not_found_error');
  }
}
