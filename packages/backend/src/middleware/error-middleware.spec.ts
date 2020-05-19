import { Response, Request } from 'express';
import { ISeasonalBackendError } from '../interfaces/backend-error.interface';
import { errorMiddleware, error404Middleware } from './error-middleware';

describe('errorMiddleware', () => {
  let next: jest.Mock;
  let response: Response;
  const request = {} as Request;
  let responseStatusResult: Response;

  beforeEach(() => {
    next = jest.fn();
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

    test('sends an error status', () =>
      expect(response.status).toHaveBeenCalledWith(error.status));

    test('sends the error as json', () =>
      expect(responseStatusResult.json).toHaveBeenCalledWith({ message: error.message }));

  });

});

describe('error404Middleware', () => {
  let response: Response;
  const request = {} as Request;
  let responseStatusResult: Response;

  beforeEach(() => {
    responseStatusResult = {
      json: jest.fn() as any
    } as Response;
    response = {
      status: jest.fn().mockReturnValue(responseStatusResult) as any
    } as Response;
    error404Middleware()(request, response, jest.fn());
  });

  test('sends a 404 status', () =>
    expect(response.status).toHaveBeenCalledWith(404));

  test('sends the message as json', () =>
    expect(responseStatusResult.json).toHaveBeenCalledWith({ message: 'Not found' }));

});
