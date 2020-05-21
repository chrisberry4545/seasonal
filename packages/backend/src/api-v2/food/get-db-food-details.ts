import { IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { queryPostgres, getSqlQuery } from '../../postgres';

export const getDbFoodDetails = async (
  id: string,
  regionId: string
): Promise<IHydratedFood | undefined> => {
  const getSingleFoodDetails = await getSqlQuery(`${__dirname}/get-db-food-details.sql`);
  const result = await queryPostgres<IHydratedFood>(
    getSingleFoodDetails,
    [regionId, id]
  );
  return result.rows[0];
};
