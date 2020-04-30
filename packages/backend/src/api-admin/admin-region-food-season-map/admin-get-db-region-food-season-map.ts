import { queryPostgres, getSqlQuery } from '../../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const adminGetDbRegionFoodSeasonMaps = async (
  id: string | null
): Promise<IRegionFoodSeasonMap[]> => {
  const query = await getSqlQuery(`${__dirname}/admin-get-region-food-season-maps.sql`);
  const result = await queryPostgres<IRegionFoodSeasonMap>(
    query,
    [id]
  );
  return result.rows;
};
