import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

export const getDbUsers = async (id: string | null) => {
  const query = await getSqlQueryV2(`${__dirname}/admin-get-users.sql`);
  const result = await queryPostgres<IUser>(
    query,
    [id]
  );
  return result.rows;
};
