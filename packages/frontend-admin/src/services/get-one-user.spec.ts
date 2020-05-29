import { getOneUser } from './get-one-user';
import * as makeAuthorizedRequest from './make-authorized-request';
import { USER_URL } from '../config';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

describe('getOneUser', () => {
  const response = {} as IUser;
  const id = 'id';
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IUser;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getOneUser(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${USER_URL}/${id}`
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
