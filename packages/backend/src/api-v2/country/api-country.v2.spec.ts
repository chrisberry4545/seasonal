import {
  Router, NextFunction, Response
} from 'express';
import { apiCountryV2 } from './api-country.v2';
import * as getAllCachedCountries from './get-all-cached-countries';
import * as apiUtils from '../../api-utils';
import { ISeasonalBackendError } from '../../interfaces';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

describe('apiCountryV2', () => {
  let mockRouter: Router;
  let mockGet: jest.Mock;
  let mockNext: NextFunction;
  const request = {};
  let mockResponse: Response;
  const mock500Error = {
    status: 500
  } as ISeasonalBackendError;

  beforeEach(() => {
    mockGet = jest.fn();
    mockRouter = {
      get: mockGet as any
    } as Router;
    mockNext = jest.fn();
    mockResponse = {
      json: jest.fn() as any
    } as Response;
    jest.spyOn(apiUtils, 'get500Error')
      .mockReturnValue(mock500Error);
    apiCountryV2(mockRouter);
  });

  test('adds the correct route', () => expect(mockGet.mock.calls[0][0]).toBe('/'));

  describe('when getAllCachedCountries errors', () => {
    const error = new Error('cannot find badge');
    beforeEach(async () => {
      jest.spyOn(getAllCachedCountries, 'getAllCachedCountries')
        .mockRejectedValue(error);
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends a 500 error to next', () =>
      expect(mockNext).toHaveBeenCalledWith(mock500Error));

  });

  describe('when getAllCachedCountries is successful', () => {
    const cachedCountries = [{}] as ICountry[];
    beforeEach(async () => {
      jest.spyOn(getAllCachedCountries, 'getAllCachedCountries')
        .mockResolvedValue(cachedCountries);
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends the result as json to the response', () =>
      expect(mockResponse.json).toHaveBeenCalledWith(cachedCountries));

  });

});
