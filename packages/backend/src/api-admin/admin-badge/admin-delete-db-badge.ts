import { getSqlQuery, queryPostgres } from '../../postgres';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbBadge = async (
  id: string
): Promise<IBadge> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-badge.sql`);
  const result = await queryPostgres<IBadge>(
    query,
    [id]
  );
  return result.rows[0];
};
