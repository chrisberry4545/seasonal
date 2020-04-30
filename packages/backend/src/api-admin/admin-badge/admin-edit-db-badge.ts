import { queryPostgres, getSqlQuery } from '../../postgres';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbBadge = async (
  item: IBadge
): Promise<IBadge> => {
  const query = await getSqlQuery(`${__dirname}/admin-edit-badge.sql`);
  const result = await queryPostgres<IBadge>(
    query,
    [
      item.id,
      item.name
    ]
  );
  return result.rows && result.rows[0];
};
