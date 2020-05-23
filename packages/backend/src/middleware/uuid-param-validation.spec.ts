import { Request, Response } from 'express';
import { uuidParamValidation } from './uuid-param-validation';

describe('uuidParamValidation', () => {
  const invalidMessage = 'Please provide a valid id';
  let next: jest.Mock;
  let response: Response;
  const request = {
    params: {}
  } as Request;
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

  describe('when there is no id', () => {
    beforeEach(() => uuidParamValidation()(request, response, next));

    test('returns a status of 400', () =>
      expect(response.status).toHaveBeenCalledWith(400));

    test('returns the expected message', () =>
      expect(responseStatusResult.json).toHaveBeenCalledWith({
        message: invalidMessage
      }));

  });

  describe.each([
    'abc',
    'd1df368e-6ed1-4a50-bb7d-6163c15df1d',
    'd1df368e6ed1-4a50-bb7d-6163c15df1d',
    'd1df368e6ed14a50bb7d6163c15df1d'
  ])('when there is an id but it is not a valid uuid', (invalidUUID) => {
    beforeEach(() => uuidParamValidation()({
      ...request,
      params: {
        id: invalidUUID
      }
    } as any, response, next));

    test('returns a status of 400', () =>
      expect(response.status).toHaveBeenCalledWith(400));

    test('returns the expected message', () =>
      expect(responseStatusResult.json).toHaveBeenCalledWith({
        message: invalidMessage
      }));

  });

  describe('when there is a valid uuid', () => {
    beforeEach(() => uuidParamValidation()({
      ...request,
      params: {
        id: 'd1df368e6ed1-4a50-bb7d-6163c15df1d'
      }
    } as any, response, next));

    test('returns a status of 400', () =>
      expect(response.status).toHaveBeenCalledWith(400));

    test('returns the expected message', () =>
      expect(responseStatusResult.json).toHaveBeenCalledWith({
        message: invalidMessage
      }));
  });
});
