import { getSingleRegionFoodSeasonMap } from './get-single-region-food-season-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

describe('getSingleRegionFoodSeasonMap', () => {
  const response = {} as IRegionFoodSeasonMap;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRegionFoodSeasonMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getSingleRegionFoodSeasonMap(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${REGION_FOOD_SEASON_MAP_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
