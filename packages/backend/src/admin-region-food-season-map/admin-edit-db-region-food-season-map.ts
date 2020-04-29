import { queryPostgres, getSqlQueryV2 } from '../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const adminEditDbRegionFoodSeasonMap = async (
  item: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> => {
  const query = await getSqlQueryV2(`${__dirname}/admin-edit-region-food-season-map.sql`);
  const result = await queryPostgres<IRegionFoodSeasonMap>(
    query,
    [
      item.id,
      item.regionId,
      item.foodId,
      item.seasonId
    ]
  );
  return result.rows && result.rows[0];
};
