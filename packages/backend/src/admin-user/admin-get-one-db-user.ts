import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { getDbUsers } from './admin-get-db-users';

export const adminGetOneDbUser = async (
  id: string
): Promise<IUser> => {
  const result = await getDbUsers(id);
  return result && result[0];
};
