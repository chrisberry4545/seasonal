import { getAllRegionFoodSeasonMap } from './get-all-region-food-season-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

describe('getAllRegionFoodSeasonMap', () => {
  const response = [{}] as IRegionFoodSeasonMap[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRegionFoodSeasonMap[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllRegionFoodSeasonMap();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      REGION_FOOD_SEASON_MAP_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
