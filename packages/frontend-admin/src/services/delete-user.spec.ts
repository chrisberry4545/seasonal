import { deleteUser } from './delete-user';
import * as makeAuthorizedRequest from './make-authorized-request';
import { USER_URL } from '../config';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

describe('deleteUser', () => {
  const response = {} as IUser;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IUser;
  const id = 'id';
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await deleteUser(id);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      `${USER_URL}/${id}`,
      {
        method: 'DELETE'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
