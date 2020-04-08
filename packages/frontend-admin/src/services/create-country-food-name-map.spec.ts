import { createCountryFoodNameMap } from './create-country-food-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('createCountryFoodNameMap', () => {
  test('calls makeAuthorizedRequest', async () => {
    const mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue({});
    const countryFoodNameMap = {
      id: '1'
    } as ICountryFoodNameMap;
    await createCountryFoodNameMap(countryFoodNameMap);
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_FOOD_NAME_MAP_URL,
      {
        body: JSON.stringify(countryFoodNameMap),
        method: 'POST'
      }
    );
  });
});
