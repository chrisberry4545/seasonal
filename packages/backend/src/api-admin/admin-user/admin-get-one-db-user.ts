import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbUsers } from './admin-get-db-users';

export const adminGetOneDbUser = async (
  id: string
): Promise<IUser | undefined> => {
  const result = await adminGetDbUsers(id);
  return result && result[0];
};
