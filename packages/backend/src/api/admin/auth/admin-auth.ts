import { appPassport } from './app-passport';
export const adminAuth =
  appPassport.authenticate('jwt-admin', { session: false });
