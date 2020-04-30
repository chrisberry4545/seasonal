import { appPassport } from './app-passport';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared-models';
export const editorAuth =
  appPassport.authenticate(USER_ROLES.EDITOR, { session: false });
