import { deleteCountryToFoodNameMap } from './delete-country-food-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('deleteCountryToFoodNameMap', () => {
  const response = {} as ICountryFoodNameMap;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryFoodNameMap;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteCountryToFoodNameMap(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${COUNTRY_FOOD_NAME_MAP_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
