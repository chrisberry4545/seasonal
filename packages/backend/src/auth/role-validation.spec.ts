import { VerifiedCallback } from 'passport-jwt';
import * as adminGetOneDbUser from '../api-admin/admin-user/admin-get-one-db-user';
import { USER_ROLES, IUser } from '@chrisb-dev/seasonal-shared-models';
import { roleValidation } from './role-validation';

describe('roleValidation', () => {
  const userRole = USER_ROLES.ADMIN;
  let userResult: IUser | undefined;
  const jwtPayload = {
    user: { id: '1' }
  };
  const callback: VerifiedCallback = (
    error, user, info
  ) => userResult = user;

  beforeEach(() => userResult = undefined);

  describe('when the user exists and includes the required role', () => {
    beforeEach(() => {
      jest.spyOn(adminGetOneDbUser, 'adminGetOneDbUser')
        .mockResolvedValue({
          roles: [userRole]
        } as IUser);
      roleValidation(jwtPayload, callback, USER_ROLES.ADMIN);
    });

    test('returns the user', () => expect(userResult).toBe(jwtPayload.user));

  });

  describe('when the user exists but does not include the required role', () => {
    beforeEach(() => {
      jest.spyOn(adminGetOneDbUser, 'adminGetOneDbUser')
        .mockResolvedValue({
          roles: [userRole]
        } as IUser);
      roleValidation(jwtPayload, callback, USER_ROLES.EDITOR);
    });

    test('returns null', () => expect(userResult).toBeNull());

  });

  describe('when the user does not exist', () => {
    beforeEach(() => {
      jest.spyOn(adminGetOneDbUser, 'adminGetOneDbUser')
        .mockResolvedValue(undefined);
      roleValidation(jwtPayload, callback, USER_ROLES.EDITOR);
    });

    test('returns null', () => expect(userResult).toBeNull());
  });

});
