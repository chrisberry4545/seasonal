import { getAllFood } from './get-all-food';
import * as makeAuthorizedRequest from './make-authorized-request';
import { FOOD_URL } from '../config';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

describe('getAllFood', () => {
  const response = [{}] as IFood[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IFood[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllFood();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      FOOD_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
