import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { hashPassword } from './hash-password';

export const adminCreateDbUser = async (
  item: IUser
): Promise<IUser> => {
  const { username, password } = item;
  const hashedPassword = await hashPassword(password);
  const query = await getSqlQueryV2(`${__dirname}/admin-create-user.sql`);
  const result = await queryPostgres<IUser>(
    query,
    [username, hashedPassword]
  );
  return result.rows && result.rows[0];
};
