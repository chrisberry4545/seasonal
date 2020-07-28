import {
  Router, NextFunction, Response
} from 'express';
import { apiTranslationV2 } from './api-translation.v2';
import * as getTranslation from './get-translation';
import * as apiUtils from '../../api-utils';
import { ISeasonalBackendError } from '../../interfaces';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('apiTranslationV2', () => {
  let mockRouter: Router;
  let mockGet: jest.Mock;
  let mockNext: NextFunction;
  const request = { params: { language:  LANGUAGES.EN_US } };
  let mockResponse: Response;
  const mock404Error = {
    status: 404
  } as ISeasonalBackendError;
  const mock500Error = {
    status: 500
  } as ISeasonalBackendError;

  beforeEach(() => {
    jest.clearAllMocks();
    mockGet = jest.fn();
    mockRouter = {
      get: mockGet as any
    } as Router;
    mockNext = jest.fn();
    mockResponse = {
      json: jest.fn() as any
    } as Response;
    jest.spyOn(apiUtils, 'get404Error')
      .mockReturnValue(mock404Error);
    jest.spyOn(apiUtils, 'get500Error')
      .mockReturnValue(mock500Error);
    apiTranslationV2(mockRouter);
  });

  test('adds the correct route', () => expect(mockGet.mock.calls[0][0]).toBe('/:language'));

  describe('when getTranslation errors', () => {
    const error = new Error('cannot find translation');
    beforeEach(async () => {
      jest.spyOn(getTranslation, 'getTranslation')
        .mockImplementation(() => {
          throw error;
        });
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends a 500 error to next', () =>
      expect(mockNext).toHaveBeenCalledWith(mock500Error));

  });

  describe('when no result is returned from getTranslation', () => {
    beforeEach(async () => {
      jest.spyOn(getTranslation, 'getTranslation')
        .mockReturnValue(undefined);
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends a 404 error to next', () =>
      expect(mockNext).toHaveBeenCalledWith(mock404Error));

  });

  describe('when getTranslation is successful', () => {
    const translation = {};
    beforeEach(async () => {
      jest.spyOn(getTranslation, 'getTranslation')
        .mockReturnValue(translation);
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends the result as json to the response', () =>
      expect(mockResponse.json).toHaveBeenCalledWith(translation));

  });

});
