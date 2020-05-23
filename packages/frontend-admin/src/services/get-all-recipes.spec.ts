import { getAllRecipes } from './get-all-recipes';
import * as makeAuthorizedRequest from './make-authorized-request';
import { RECIPE_URL } from '../config';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

describe('getAllRecipes', () => {
  const response = [{}] as IRecipe[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRecipe[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllRecipes();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      RECIPE_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
