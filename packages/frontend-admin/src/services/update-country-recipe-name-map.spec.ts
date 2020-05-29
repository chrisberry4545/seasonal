import { updateCountryRecipeNameMap } from './update-country-recipe-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('updateCountryRecipeNameMap', () => {
  const response = {} as ICountryRecipeNameMap;
  const item = {
    id: 'id'
  } as ICountryRecipeNameMap;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryRecipeNameMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateCountryRecipeNameMap(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_RECIPE_NAME_MAP_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
