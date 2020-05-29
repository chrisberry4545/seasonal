import { getOneFood } from './get-one-food';
import * as makeAuthorizedRequest from './make-authorized-request';
import { FOOD_URL } from '../config';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

describe('getOneFood', () => {
  const response = {} as IFood;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IFood;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneFood(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${FOOD_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
