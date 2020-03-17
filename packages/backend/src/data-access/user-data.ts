import { queryPostgres, getSqlQuery } from '../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

export const getDbUserForLogin = async (
  username: string
): Promise<IUser> => {
  const getUserQuery = await getSqlQuery('get-user-for-login.sql');
  const result = await queryPostgres<IUser>(
    getUserQuery,
    [username]
  );
  return result.rows && result.rows[0];
};
