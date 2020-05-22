import { IUser } from '@chrisb-dev/seasonal-shared-models';
import * as adminGetDbUsers from './admin-get-db-users';
import { adminGetAllDbUsers } from './admin-get-all-db-users';

describe('adminGetAllDbUsers', () => {
  let mockAdminGetDbUsers: jest.SpyInstance;
  const mockUsers = [{}] as IUser[];
  let result: IUser[];

  beforeEach(async () => {
    mockAdminGetDbUsers = jest.spyOn(adminGetDbUsers, 'adminGetDbUsers')
      .mockResolvedValue(mockUsers);
    mockAdminGetDbUsers.mockClear();
    result = await adminGetAllDbUsers();
  });

  test('calls adminGetDbUsers', () =>
    expect(mockAdminGetDbUsers).toHaveBeenCalledWith(null));

  test('returns the expected result', () => expect(result).toBe(mockUsers));

});
