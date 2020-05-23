import { createCountryFoodNameMap } from './create-country-food-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('createCountryFoodNameMap', () => {
  const response = {} as ICountryFoodNameMap;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryFoodNameMap;
  const item = {
    id: 'id'
  } as ICountryFoodNameMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createCountryFoodNameMap(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_FOOD_NAME_MAP_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
