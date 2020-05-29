import { updateRecipe } from './update-recipe';
import * as makeAuthorizedRequest from './make-authorized-request';
import { RECIPE_URL } from '../config';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

describe('updateRecipe', () => {
  const response = {} as IRecipe;
  const item = {
    id: 'id'
  } as IRecipe;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRecipe;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateRecipe(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      RECIPE_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
