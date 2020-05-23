import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbUsers } from './admin-get-db-users';

export const adminGetAllDbUsers = async (): Promise<IUser[]> =>
  adminGetDbUsers(null);
