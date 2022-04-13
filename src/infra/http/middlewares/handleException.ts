import { NextFunction, Request, Response } from 'express';

import { AppError } from '@infra/http/errors/AppError';
import { MulterError } from 'multer';

export async function handleException(
  error: AppError | Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): Promise<Response> {
  if (error instanceof AppError) {
    return response
      .status(error.status_code)
      .json({ error: error.message, type_error: error.type_error });
  }
  if (error instanceof MulterError) {
    return response.status(400).json({
      error: 'Selecione um arquivo válido.',
      type_error: 'bad_request_error',
    });
  }

  return response.status(500).json({
    error: `Internal server error - ${error.message}`,
    type_error: 'server_error',
  });
}
