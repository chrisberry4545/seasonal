import { IVerifyOptions } from 'passport-local';
import * as  getUserLogin from '../api-admin/admin-user/get-user-login';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { appLogin } from './app-login';

describe('appLogin', () => {
  let cbError: IVerifyOptions | undefined;
  let cbUser: IUser | undefined;
  const username = 'username';
  const password = 'password';
  let mockGetUserLogin: jest.SpyInstance;
  const cb = (error: any, user?: any, options?: IVerifyOptions) => {
    cbError = options;
    cbUser = user;
  };

  beforeEach(() => {
    cbError = undefined;
    cbUser = undefined;
  });

  describe('when getUserLogin errors', () => {
    const error = new Error('cannot find user');
    beforeEach(() => {
      mockGetUserLogin = jest.spyOn(getUserLogin, 'getUserLogin')
        .mockRejectedValue(error);
      appLogin(username, password, cb);
    });

    test('calls getUserLogin', () =>
      expect(mockGetUserLogin).toHaveBeenCalledWith(
        username, password
      ));

    test('sets the user to null', () =>
      expect(cbUser).toBeNull());

    test('sets the error on the callback', () =>
      expect(cbError?.message).toBe(error));

  });

  describe('when getUserLogin is successful', () => {
    const mockUser = { id: '1' } as IUser;
    beforeEach(() => {
      mockGetUserLogin = jest.spyOn(getUserLogin, 'getUserLogin')
        .mockResolvedValue(mockUser);
      appLogin(username, password, cb);
    });

    test('calls getUserLogin', () =>
      expect(mockGetUserLogin).toHaveBeenCalledWith(
        username, password
      ));

    test('sets the user to the result', () =>
      expect(cbUser).toBe(mockUser));

    test('does not set the error', () =>
      expect(cbError).toBeUndefined());
  });

});
