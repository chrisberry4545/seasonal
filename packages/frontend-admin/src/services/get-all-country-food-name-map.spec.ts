import { getAllCountryFoodNameMap } from './get-all-country-food-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('getAllCountryFoodNameMap', () => {
  const response = [{}] as ICountryFoodNameMap[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryFoodNameMap[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllCountryFoodNameMap();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_FOOD_NAME_MAP_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
