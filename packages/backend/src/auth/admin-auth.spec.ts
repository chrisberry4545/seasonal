import { appPassport } from './app-passport';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared-models';
import { adminAuth } from './admin-auth';

describe('adminAuth', () => {

  test('calls appPassport.authenticate with the correct role', () => {
    const mockAuthenticate =
      jest.spyOn(appPassport, 'authenticate').mockImplementation(() => null);
    adminAuth();
    expect(mockAuthenticate).toHaveBeenCalledWith(
      USER_ROLES.ADMIN,  { session: false }
    );
  });

});
