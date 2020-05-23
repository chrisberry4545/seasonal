import { updateUser } from './update-user';
import * as makeAuthorizedRequest from './make-authorized-request';
import { USER_URL } from '../config';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

describe('updateUser', () => {
  const response = {} as IUser;
  const item = {
    id: 'id'
  } as IUser;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IUser;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await updateUser(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      USER_URL,
      {
        body: JSON.stringify(item),
        method: 'PATCH'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
