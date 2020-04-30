import { IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { queryPostgres, getSqlQueryV2 } from '../../postgres';

export const getDbFoodDetails = async (
  id: string,
  regionId: string
): Promise<IHydratedFood> => {
  const getSingleFoodDetails = await getSqlQueryV2(`${__dirname}/get-food-details.sql`);
  const result = await queryPostgres<IHydratedFood>(
    getSingleFoodDetails,
    [regionId, id]
  );
  return result.rows[0];
};
