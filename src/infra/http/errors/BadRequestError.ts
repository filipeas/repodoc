import { AppError } from './AppError';

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400, 'bab_request_error');
  }
}
