import { appPassport } from './app-passport';
import { USER_ROLES } from '@chrisb-dev/seasonal-shared-models';
export const adminAuth = () =>
  appPassport.authenticate(USER_ROLES.ADMIN, { session: false });
