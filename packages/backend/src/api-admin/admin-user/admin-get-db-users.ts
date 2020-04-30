import { queryPostgres, getSqlQuery } from '../../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

export const getDbUsers = async (id: string | null) => {
  const query = await getSqlQuery(`${__dirname}/admin-get-users.sql`);
  const result = await queryPostgres<IUser>(
    query,
    [id]
  );
  return result.rows;
};
