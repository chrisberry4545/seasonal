import { getSingleRecipe } from './get-single-recipe';
import * as makeAuthorizedRequest from './make-authorized-request';
import { RECIPE_URL } from '../config';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

describe('getSingleRecipe', () => {
  const response = {} as IRecipe;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IRecipe;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getSingleRecipe(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${RECIPE_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
