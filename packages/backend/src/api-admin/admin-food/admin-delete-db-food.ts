import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbFood = async (
  id: string
): Promise<IFood> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-delete-food.sql`);
  const result = await queryPostgres<IFood>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
