import {
  Router, NextFunction, Response
} from 'express';
import { apiSeasonV2 } from './api-season.v2';
import * as getAllCachedSeasons from './get-all-cached-seasons';
import * as apiUtils from '../../api-utils';
import { ISeasonalBackendError } from '../../interfaces';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

describe('apiSeasonV2', () => {
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
    jest.spyOn(apiUtils, 'getRegionIdFromQueryParams')
      .mockReturnValue('regionId');
    apiSeasonV2(mockRouter);
  });

  test('adds the correct route', () => expect(mockGet.mock.calls[0][0]).toBe('/'));

  describe('when getAllCachedSeasons errors', () => {
    const error = new Error('cannot find badge');
    beforeEach(async () => {
      jest.spyOn(getAllCachedSeasons, 'getAllCachedSeasons')
        .mockRejectedValue(error);
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends a 500 error to next', () =>
      expect(mockNext).toHaveBeenCalledWith(mock500Error));

  });

  describe('when getAllCachedSeasons is successful', () => {
    const cachedSeasons = [{}] as IBaseSeason[];
    beforeEach(async () => {
      jest.spyOn(getAllCachedSeasons, 'getAllCachedSeasons')
        .mockResolvedValue(cachedSeasons);
      await mockGet.mock.calls[0][1](request, mockResponse, mockNext);
    });

    test('sends the result as json to the response', () =>
      expect(mockResponse.json).toHaveBeenCalledWith(cachedSeasons));

  });

});
