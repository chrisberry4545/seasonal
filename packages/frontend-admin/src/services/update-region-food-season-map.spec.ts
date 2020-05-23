import { updateRegionFoodSeasonMap } from './update-region-food-season-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

describe('updateRegionFoodSeasonMap', () => {
  const response = {} as IRegionFoodSeasonMap;
  const item = {
    id: 'id'
  } as IRegionFoodSeasonMap;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRegionFoodSeasonMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateRegionFoodSeasonMap(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      REGION_FOOD_SEASON_MAP_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
