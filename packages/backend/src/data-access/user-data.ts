import { queryPostgres, getSqlQuery } from '../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared';

export const createDbUser = async (
  username: string,
  hashedPassword: string
): Promise<IUser> => {
  const getUserQuery = await getSqlQuery('create-user.sql');
  const result = await queryPostgres<IUser>(
    getUserQuery,
    [username, hashedPassword]
  );
  return result.rows && result.rows[0];
};

export const getUserForLogin = async (
  username: string
): Promise<IUser> => {
  const getUserQuery = await getSqlQuery('get-user-for-login.sql');
  const result = await queryPostgres<IUser>(
    getUserQuery,
    [username]
  );
  return result.rows && result.rows[0];
};

const getUsers = async (id: string | null) => {
  const getUserQuery = await getSqlQuery('get-users-by-id.sql');
  const result = await queryPostgres<IUser>(
    getUserQuery,
    [id]
  );
  return result.rows;
};

export const getUserById = async (
  id: string
): Promise<IUser> => {
  const users = await getUsers(id);
  return users && users[0];
};

export const getAllUsers = async (): Promise<IUser[]> =>
  getUsers(null);