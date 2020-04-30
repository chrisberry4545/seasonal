import { queryPostgres, getSqlQuery } from '../../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbRegionFoodSeasonMap = async (
  item: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> => {
  const query = await getSqlQuery(`${__dirname}/admin-create-region-food-season-map.sql`);
  const result = await queryPostgres<IRegionFoodSeasonMap>(
    query,
    [
      item.regionId,
      item.foodId,
      item.seasonId
    ]
  );
  return result.rows && result.rows[0];
};
