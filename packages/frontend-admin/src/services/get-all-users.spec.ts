import { getAllUsers } from './get-all-users';
import * as makeAuthorizedRequest from './make-authorized-request';
import { USER_URL } from '../config';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

describe('getAllUsers', () => {
  const response = [{}] as IUser[];
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IUser[];
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await getAllUsers();
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      USER_URL
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
