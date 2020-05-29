import { getAllCountryRecipeNameMap } from './get-all-country-recipe-name-map';
import * as makeAuthorizedRequest from './make-authorized-request';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';

describe('getAllCountryRecipeNameMap', () => {
  const response = [{}] as ICountryRecipeNameMap[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: ICountryRecipeNameMap[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllCountryRecipeNameMap();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      COUNTRY_RECIPE_NAME_MAP_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
