import { ErrorRequestHandler, RequestHandler, Response } from 'express';
import { ISeasonalBackendError } from '../interfaces/backend-error.interface';

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
    return sendResponse(res, status, message);
  }
  return next();
};

export const error404Middleware = (): RequestHandler => (
  req, res
) => sendResponse(res, 404, 'Not found');
