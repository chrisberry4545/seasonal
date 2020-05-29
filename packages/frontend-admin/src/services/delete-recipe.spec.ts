import { deleteRecipe } from './delete-recipe';
import * as makeAuthorizedRequest from './make-authorized-request';
import { RECIPE_URL } from '../config';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

describe('deleteRecipe', () => {
  const response = {} as IRecipe;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRecipe;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteRecipe(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${RECIPE_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
