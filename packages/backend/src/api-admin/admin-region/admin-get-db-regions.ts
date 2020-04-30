import { queryPostgres, getSqlQuery } from '../../postgres';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbRegions = async (
  id: string | null
): Promise<IDbRegion[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-regions.sql`);
  const result = await queryPostgres<IDbRegion>(
    query,
    [id]
  );
  return result.rows;
};
