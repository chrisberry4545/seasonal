import { queryPostgres, getSqlQuery } from '../postgres';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbCountryFoodNameMap = async (
  item: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> => {
  const query = await getSqlQuery('admin-create-country-to-food-name-map.sql');
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [
      item.name,
      item.country.id,
      item.food.id
    ]
  );
  return result.rows && result.rows[0];
};

const adminGetCountryFoodNameMaps = async (
  id: string | null
): Promise<ICountryFoodNameMap[]> => {
  const query = await getSqlQuery('admin-get-country-to-food-name-maps.sql');
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [id]
  );
  return result.rows;
};

export const adminGetAllDbCountryFoodNameMaps = async (): Promise<ICountryFoodNameMap[]> =>
  adminGetCountryFoodNameMaps(null);

export const adminGetOneDbCountryFoodNameMap = async (
  id: string
): Promise<ICountryFoodNameMap> => {
  const results = await adminGetCountryFoodNameMaps(id);
  return results && results[0];
};

export const adminEditDbCountryFoodNameMap = async (
  item: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> => {
  const query = await getSqlQuery('admin-edit-country-to-food-name-map.sql');
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [
      item.name,
      item.country.id,
      item.food.id
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbCountryFoodNameMap = async (
  id: string
): Promise<ICountryFoodNameMap> => {
  const query = await getSqlQuery('admin-delete-country-to-food-name-map.sql');
  const result = await queryPostgres<ICountryFoodNameMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
