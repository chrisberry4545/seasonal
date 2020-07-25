import {
  Router, NextFunction, Response
} from 'express';
import * as getQueryParams from '../../api-utils/get-query-params';
import { apiSeasonWithFoodV2 } from './api-season-with-food.v2';
import * as getOneCachedSeasonWithFood from './get-one-cached-season-with-food';
import * as getAllCachedSeasonsWithFood from './get-all-cached-seasons-with-food';
import * as apiUtils from '../../api-utils';
import { ISeasonalBackendError } from '../../interfaces';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

describe('apiSeasonWithFoodV2', () => {
  let mockRouter: Router;
  let mockGet: jest.Mock;
  let mockNext: NextFunction;
  const request = { params: { id:  '1' } };
  let mockResponse: Response;
  const mock404Error = {
    status: 404
  } as ISeasonalBackendError;
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
    jest.spyOn(getQueryParams, 'getRegionIdFromQueryParams')
      .mockReturnValue('regionId');
    jest.spyOn(getQueryParams, 'getLanguageFromQueryParams')
      .mockReturnValue(LANGUAGES.EN_GB);
    jest.spyOn(apiUtils, 'get404Error')
      .mockReturnValue(mock404Error);
    jest.spyOn(apiUtils, 'get500Error')
      .mockReturnValue(mock500Error);
    apiSeasonWithFoodV2(mockRouter);
  });

  test('adds the correct route', () => expect(mockGet.mock.calls[0][0]).toBe('/'));

  describe('get all', () => {

    test('adds the get all route', () => expect(mockGet.mock.calls[0][0]).toBe('/'));

    describe('when getAllCachedSeasonsWithFood errors', () => {
      const error = new Error('cannot find badge');
      beforeEach(async () => {
        jest.spyOn(getAllCachedSeasonsWithFood, 'getAllCachedSeasonsWithFood')
          .mockReturnValue(() => Promise.reject(error));
        await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
      });

      test('sends a 500 error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

    describe('when getAllCachedSeasonsWithFood is successful', () => {
      const cachedSeasonDetails = [{}] as IHydratedSeason[];
      beforeEach(async () => {
        jest.spyOn(
          getAllCachedSeasonsWithFood,
          'getAllCachedSeasonsWithFood'
        ).mockReturnValue(() => Promise.resolve(cachedSeasonDetails));
        await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
      });

      test('sends the result as json to the response', () =>
        expect(mockResponse.json).toHaveBeenCalledWith(cachedSeasonDetails));

    });

  });

  describe('get one', () => {

    test('adds the get one route', () => expect(mockGet.mock.calls[1][0]).toBe('/:seasonIndex'));

    describe('when getOneCachedSeasonWithFood errors', () => {
      const error = new Error('cannot find badge');
      beforeEach(async () => {
        jest.spyOn(getOneCachedSeasonWithFood, 'getOneCachedSeasonWithFood')
          .mockReturnValue(() => Promise.reject(error));
        await mockGet.mock.calls[1][1](request, mockResponse, mockNext);
      });

      test('sends a 500 error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock500Error));

    });

    describe('when no result is returned from getOneCachedSeasonWithFood', () => {
      beforeEach(async () => {
        jest.spyOn(
          getOneCachedSeasonWithFood,
          'getOneCachedSeasonWithFood'
        ).mockReturnValue(() => Promise.resolve(undefined));
        await mockGet.mock.calls[1][1](request, mockResponse, mockNext);
      });

      test('sends a 404 error to next', () =>
        expect(mockNext).toHaveBeenCalledWith(mock404Error));

    });

    describe('when getOneCachedSeasonWithFood is successful', () => {
      const cachedSeasonDetails = {} as IHydratedSeason;
      beforeEach(async () => {
        jest.spyOn(
          getOneCachedSeasonWithFood,
          'getOneCachedSeasonWithFood'
        ).mockReturnValue(() => Promise.resolve(cachedSeasonDetails));
        await mockGet.mock.calls[1][1](request, mockResponse, mockNext);
      });

      test('sends the result as json to the response', () =>
        expect(mockResponse.json).toHaveBeenCalledWith(cachedSeasonDetails));

    });

  });

});
