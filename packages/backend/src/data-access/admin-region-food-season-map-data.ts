import { queryPostgres, getSqlQuery } from '../postgres';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateDbRegionFoodSeasonMap = async (
  item: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> => {
  const query = await getSqlQuery('admin-create-region-food-season-map.sql');
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

const adminGetRegionFoodSeasonMaps = async (
  id: string | null
): Promise<IRegionFoodSeasonMap[]> => {
  const query = await getSqlQuery('admin-get-region-food-season-maps.sql');
  const result = await queryPostgres<IRegionFoodSeasonMap>(
    query,
    [id]
  );
  return result.rows;
};

export const adminGetAllDbRegionFoodSeasonMaps = async (): Promise<IRegionFoodSeasonMap[]> =>
  adminGetRegionFoodSeasonMaps(null);

export const adminGetOneDbRegionFoodSeasonMap = async (
  id: string
): Promise<IRegionFoodSeasonMap> => {
  const result = await adminGetRegionFoodSeasonMaps(id);
  return result[0];
};

export const adminEditDbRegionFoodSeasonMap = async (
  item: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> => {
  const query = await getSqlQuery('admin-edit-region-food-season-map.sql');
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

export const adminDeleteDbRegionFoodSeasonMap = async (
  id: string
): Promise<IRegionFoodSeasonMap> => {
  const query = await getSqlQuery('admin-delete-region-food-season-map.sql');
  const result = await queryPostgres<IRegionFoodSeasonMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
