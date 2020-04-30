import { queryPostgres, getSqlQuery } from '../../postgres';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbBadges = async (
  id: string | null
): Promise<IBadge[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-badges.sql`);
  const result = await queryPostgres<IBadge>(
    query,
    [id]
  );
  return result.rows;
};
