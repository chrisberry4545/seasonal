import { IHydratedBadge } from '@chrisb-dev/seasonal-shared-models';
import { queryPostgres, getSqlQuery } from '../../postgres';

export const getDbBadgeDetails = async (
  id: string,
  regionId: string
): Promise<IHydratedBadge> => {
  const getSingleBadgeDetails = await getSqlQuery(`${__dirname}/get-badge-details.sql`);
  const result = await queryPostgres<IHydratedBadge>(
    getSingleBadgeDetails,
    [regionId, id]
  );
  return result.rows[0];
};
