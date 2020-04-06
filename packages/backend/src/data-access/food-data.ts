import { IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { queryPostgres, getSqlQuery } from '../postgres';

export const getFoodDetailsData = async (
  id: string,
  regionId: string
): Promise<IHydratedFood> => {
  const getSingleFoodDetails = await getSqlQuery('get-food-details.sql');
  const result = await queryPostgres<IHydratedFood>(
    getSingleFoodDetails,
    [regionId, id]
  );
  return result.rows[0];
};
