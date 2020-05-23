import { IUser } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbUsers from './admin-get-db-users';
import { adminGetOneDbUser } from './admin-get-one-db-user';

describe('adminGetOneDbUser', () => {
  let mockAdminGetDbUsers: jest.SpyInstance;
  const mockUser = [{}] as IUser[];
  const userId = 'userId';
  let result: IUser | undefined;

  beforeEach(async () => {
    mockAdminGetDbUsers = jest.spyOn(adminGetDbUsers, 'adminGetDbUsers')
      .mockResolvedValue(mockUser);
    mockAdminGetDbUsers.mockClear();
    result = await adminGetOneDbUser(userId);
  });

  test('calls adminGetDbUsers', () =>
    expect(mockAdminGetDbUsers).toHaveBeenCalledWith(userId));

  test('returns the expected result', () => expect(result).toBe(mockUser[0]));

});
