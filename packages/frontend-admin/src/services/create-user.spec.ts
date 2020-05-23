import { createUser } from './create-user';
import * as makeAuthorizedRequest from './make-authorized-request';
import { USER_URL } from '../config';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

describe('createUser', () => {
  const response = {} as IUser;
  let mockMakeAuthorizedRequest: jest.SpyInstance;
  let result: IUser;
  const item = {
    id: 'id'
  } as IUser;
  beforeEach(async () => {
    mockMakeAuthorizedRequest =
      jest.spyOn(makeAuthorizedRequest, 'makeAuthorizedRequest')
      .mockResolvedValue(response);
    result = await createUser(item);
  });

  test('calls makeAuthorizedRequest', async () =>
    expect(mockMakeAuthorizedRequest).toHaveBeenCalledWith(
      USER_URL,
      {
        body: JSON.stringify(item),
        method: 'POST'
      }
    ));

  test('returns the response of the call', () => expect(result).toBe(response));

});
