import { queryPostgres, getSqlQuery } from '../../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { hashPassword } from './hash-password';

export const adminEditDbUser = async (
  item: IUser
): Promise<IUser> => {
  const hashedPassword = await hashPassword(item.password);
  const query = await getSqlQuery(`${__dirname}/admin-edit-user.sql`);
  const result = await queryPostgres<IUser>(
    query,
    [
      item.id,
      item.username,
      hashedPassword,
      item.roles
    ]
  );
  return result.rows && result.rows[0];
};
