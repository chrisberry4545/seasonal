import { appPassport } from './app-passport';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared/dist/enums/user-roles.enum';
export const editorAuth =
  appPassport.authenticate(USER_ROLES.EDITOR, { session: false });
