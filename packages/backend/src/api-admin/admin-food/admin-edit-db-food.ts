import { queryPostgres, getSqlQueryV2 } from '../../postgres';
import { IFood } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbFood = async (
  item: IFood
): Promise<IFood> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-edit-food.sql`);
  const result = await queryPostgres<IFood>(
    query,
    [
      item.id,
      item.name,
      item.description,
      item.imageUrlSmall,
      item.substituteFoodIds,
      item.badgeIds
    ]
  );
  return result.rows && result.rows[0];
};
