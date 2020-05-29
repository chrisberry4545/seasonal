import { createCountryRecipeNameMap } from './create-country-recipe-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('createCountryRecipeNameMap', () => {
  const response = {} as ICountryRecipeNameMap;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryRecipeNameMap;
  const item = {
    id: 'id'
  } as ICountryRecipeNameMap;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createCountryRecipeNameMap(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_RECIPE_NAME_MAP_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
