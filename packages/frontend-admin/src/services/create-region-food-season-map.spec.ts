import { createRegionFoodSeasonMap } from './create-region-food-season-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

describe('createRegionFoodSeasonMap', () => {
  const response = {} as IRegionFoodSeasonMap;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRegionFoodSeasonMap;
  const item = {
    id: 'id'
  } as IRegionFoodSeasonMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createRegionFoodSeasonMap(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      REGION_FOOD_SEASON_MAP_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
