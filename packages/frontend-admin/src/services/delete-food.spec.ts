import { deleteFood } from './delete-food';
import * as makeAuthorizedRequest from './make-authorized-request';
import { FOOD_URL } from '../config';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

describe('deleteFood', () => {
  const response = {} as IFood;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IFood;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteFood(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${FOOD_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
