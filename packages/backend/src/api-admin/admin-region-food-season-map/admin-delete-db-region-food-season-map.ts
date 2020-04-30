import { queryPostgres, getSqlQuery } from '../../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const adminDeleteDbRegionFoodSeasonMap = async (
  id: string
): Promise<IRegionFoodSeasonMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-delete-region-food-season-map.sql`);
  const result = await queryPostgres<IRegionFoodSeasonMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
