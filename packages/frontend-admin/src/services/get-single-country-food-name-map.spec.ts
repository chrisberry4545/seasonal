import { getSingleCountryFoodNameMap } from './get-single-country-food-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('getSingleCountryFoodNameMap', () => {
  const response = {} as ICountryFoodNameMap;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryFoodNameMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getSingleCountryFoodNameMap(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${COUNTRY_FOOD_NAME_MAP_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
