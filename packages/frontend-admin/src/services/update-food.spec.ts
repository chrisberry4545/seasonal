import { updateFood } from './update-food';
import * as makeAuthorizedRequest from './make-authorized-request';
import { FOOD_URL } from '../config';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

describe('updateFood', () => {
  const response = {} as IFood;
  const item = {
    id: 'id'
  } as IFood;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IFood;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateFood(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      FOOD_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
