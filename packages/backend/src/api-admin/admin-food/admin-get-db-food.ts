import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbFood = async (
  id: string | null
): Promise<IFood[]> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-get-food.sql`);
  const result = await queryPostgres<IFood>(
    query,
    [id]
  );
  return result.rows;
};
