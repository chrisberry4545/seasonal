import { queryPostgres, getSqlQuery } from '../../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbUser = async (
  id: string
): Promise<IUser> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-user.sql`);
  const result = await queryPostgres<IUser>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
