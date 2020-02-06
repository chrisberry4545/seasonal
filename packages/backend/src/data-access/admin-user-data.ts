import { queryPostgres, getSqlQuery } from '../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbUser = async (
  username: string,
  hashedPassword: string
): Promise<IUser> => {
  const getUserQuery = await getSqlQuery('admin-create-user.sql');
  const result = await queryPostgres<IUser>(
    getUserQuery,
    [username, hashedPassword]
  );
  return result.rows && result.rows[0];
};

const getUsers = async (id: string | null) => {
  const getUserQuery = await getSqlQuery('admin-get-users.sql');
  const result = await queryPostgres<IUser>(
    getUserQuery,
    [id]
  );
  return result.rows;
};

export const adminGetOneDbUser = async (
  id: string
): Promise<IUser> => {
  const users = await getUsers(id);
  return users && users[0];
};

export const adminGetAllDbUsers = async (): Promise<IUser[]> =>
  getUsers(null);

export const adminEditDbUser = async (
  user: IUser
): Promise<IUser> => {
  const editUserQuery = await getSqlQuery('admin-edit-user.sql');
  const result = await queryPostgres<IUser>(
    editUserQuery,
    [
      user.id,
      user.username,
      user.password,
      user.roles
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbUser = async (
  userId: string
): Promise<IUser> => {
  const deleteUserQuery = await getSqlQuery('admin-delete-user.sql');
  const result = await queryPostgres<IUser>(
    deleteUserQuery,
    [userId]
  );
  return result.rows && result.rows[0];
};
