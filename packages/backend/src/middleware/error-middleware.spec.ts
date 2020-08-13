import { Response, Request } from 'express';
import { ISeasonalBackendError } from '../interfaces/backend-error.interface';
import { errorMiddleware } from './error-middleware';
import { logger } from '../logger/logger';

describe('errorMiddleware', () => {
  let next: jest.Mock;
  let response: Response;
  const request = {} as Request;
  let responseStatusResult: Response;
  let mockLogger: jest.SpyInstance;

  beforeEach(() => {
    next = jest.fn();
    mockLogger = jest.spyOn(logger, 'log').mockImplementation(() => logger);
    responseStatusResult = {
      json: jest.fn() as any
    } as Response;
    response = {
      status: jest.fn().mockReturnValue(responseStatusResult) as any
    } as Response;
  });

  test('when the error is null, calls next', () => {
    errorMiddleware()(null, request, response, next);
    expect(next).toHaveBeenCalled();
  });

  describe('when the error is defined', () => {
    const error = {
      message: 'test',
      status: 400
    } as ISeasonalBackendError;
    beforeEach(() => {
      errorMiddleware()(error, request, response, next);
    });

    test('logs the error', () => expect(mockLogger).toHaveBeenCalled());

    test('sends an error status', () =>
      expect(response.status).toHaveBeenCalledWith(error.status));

    test('sends the error as json', () =>
      expect(responseStatusResult.json).toHaveBeenCalledWith({ message: error.message }));

  });

});
