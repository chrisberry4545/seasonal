import { IHydratedBadge } from '@chrisb-dev/seasonal-shared-models';
import { queryPostgres, getSqlQuery } from '../../postgres';

export const getDbBadgeDetails = async (
  id: string,
  regionId: string,
  language?: string
): Promise<IHydratedBadge | undefined> => {
  const getSingleBadgeDetails = await getSqlQuery(`${__dirname}/get-db-badge-details.sql`);
  const result = await queryPostgres<IHydratedBadge>(
    getSingleBadgeDetails,
    [regionId, id, language]
  );
  return result.rows[0];
};
