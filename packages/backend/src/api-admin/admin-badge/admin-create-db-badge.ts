import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbBadge = async (
  item: IBadge
): Promise<IBadge> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-create-badge.sql`);
  const result = await queryPostgres<IBadge>(
    query,
    [
      item.name
    ]
  );
  return result.rows && result.rows[0];
};
