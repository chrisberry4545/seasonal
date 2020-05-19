import { appPassport } from './app-passport';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared-models';
import { editorAuth } from './editor-auth';

describe('editorAuth', () => {

  test('calls appPassport.authenticate with the correct role', () => {
    const mockAuthenticate =
      jest.spyOn(appPassport, 'authenticate').mockImplementation(() => null);
    editorAuth();
    expect(mockAuthenticate).toHaveBeenCalledWith(
      USER_ROLES.EDITOR,  { session: false }
    );
  });

});
