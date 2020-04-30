import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { getDbUsers } from './admin-get-db-users';

export const adminGetAllDbUsers = async (): Promise<IUser[]> =>
  getDbUsers(null);
