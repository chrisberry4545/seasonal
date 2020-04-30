import { queryPostgres, getSqlQuery } from '../../postgres';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbRegion = async (
  id: string
): Promise<IDbRegion> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-region.sql`);
  const result = await queryPostgres<IDbRegion>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
