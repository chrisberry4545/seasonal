import { getSqlQueryV2, queryPostgres } from '../postgres';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbBadge = async (
  id: string
): Promise<IBadge> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-delete-badge.sql`);
  const result = await queryPostgres<IBadge>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
