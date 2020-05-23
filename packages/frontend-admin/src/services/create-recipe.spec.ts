import { createRecipe } from './create-recipe';
import * as makeAuthorizedRequest from './make-authorized-request';
import { RECIPE_URL } from '../config';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

describe('createRecipe', () => {
  const response = {} as IRecipe;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRecipe;
  const item = {
    id: 'id'
  } as IRecipe;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createRecipe(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      RECIPE_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
