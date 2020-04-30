import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbRegions = async (
  id: string | null
): Promise<IDbRegion[]> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-get-regions.sql`);
  const result = await queryPostgres<IDbRegion>(
    query,
    [id]
  );
  return result.rows;
};
