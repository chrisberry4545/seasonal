import {
  Router, RequestHandler, NextFunction, Response
} from 'express';
import * as getQueryParams from '../../api-utils/get-query-params';
import { apiBadgeV2 } from './api-badge.v2';
import * as uuidParamValidation from '../../middleware/uuid-param-validation';
import * as getCachedBadgeDetails from './get-cached-badge-details';
import * as apiUtils from '../../api-utils';
import { ISeasonalBackendError } from '../../interfaces';
import { IHydratedBadge } from '@chrisb-dev/seasonal-shared-models';

describe('apiBadgeV2', () => {
  let mockRouter: Router;
  let mockGet: jest.Mock;
  let mockNext: NextFunction;
  const mockUuidParamValidationResult = {} as RequestHandler;
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
    jest.spyOn(uuidParamValidation, 'uuidParamValidation')
      .mockReturnValue(mockUuidParamValidationResult);
    jest.spyOn(getQueryParams, 'getIsVegetarianFromQueryParams')
      .mockReturnValue(true);
    jest.spyOn(getQueryParams, 'getIsVeganFromQueryParams')
      .mockReturnValue(false);
    jest.spyOn(getQueryParams, 'getRegionIdFromQueryParams')
      .mockReturnValue('regionId');
    jest.spyOn(apiUtils, 'get404Error')
      .mockReturnValue(mock404Error);
    jest.spyOn(apiUtils, 'get500Error')
      .mockReturnValue(mock500Error);
    apiBadgeV2(mockRouter);
  });

  test('adds the correct route', () => expect(mockGet.mock.calls[0][0]).toBe('/:id'));

  test('adds uuid validation', () =>
    expect(mockGet.mock.calls[0][1]).toBe(mockUuidParamValidationResult));

  describe('when getCachedBadgeDetails errors', () => {
    const error = new Error('cannot find badge');
    beforeEach(async () => {
      jest.spyOn(getCachedBadgeDetails, 'getCachedBadgeDetails')
        .mockRejectedValue(error);
      await mockGet.mock.calls[0][2](request, mockResponse, mockNext);
    });

    test('sends a 500 error to next', () =>
      expect(mockNext).toHaveBeenCalledWith(mock500Error));

  });

  describe('when no result is returned from getCachedBadgeDetails', () => {
    beforeEach(async () => {
      jest.spyOn(getCachedBadgeDetails, 'getCachedBadgeDetails')
        .mockResolvedValue(null);
      await mockGet.mock.calls[0][2](request, mockResponse, mockNext);
    });

    test('sends a 404 error to next', () =>
      expect(mockNext).toHaveBeenCalledWith(mock404Error));

  });

  describe('when getCachedBadgeDetails is successful', () => {
    const cachedBadgeDetails = {} as IHydratedBadge;
    beforeEach(async () => {
      jest.spyOn(getCachedBadgeDetails, 'getCachedBadgeDetails')
        .mockResolvedValue(cachedBadgeDetails);
      await mockGet.mock.calls[0][2](request, mockResponse, mockNext);
    });

    test('sends the result as json to the response', () =>
      expect(mockResponse.json).toHaveBeenCalledWith(cachedBadgeDetails));

  });

});
