import { ErrorRequestHandler, Response } from 'express';
import { ISeasonalBackendError } from '../interfaces/backend-error.interface';
import { logger } from '../logger/logger';

const sendResponse = (
  res: Response,
  status: 400 | 404 | 500,
  message: string
) => res.status(status).json({ message });

export const errorMiddleware = (): ErrorRequestHandler => (
  err,
  req,
  res,
  next
) => {
  if (err) {
    const {
      status, message
    } = err as ISeasonalBackendError;
    logger.log('error', message, status);
    return sendResponse(res, status, message);
  }
  return next();
};
