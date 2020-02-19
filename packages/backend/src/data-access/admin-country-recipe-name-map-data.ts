import { queryPostgres, getSqlQuery } from '../postgres';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';

export const adminCreateDbCountryRecipeNameMap = async (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQuery('admin-create-country-to-recipe-name-map.sql');
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [
      item.name,
      item.country.id,
      item.recipe.id
    ]
  );
  return result.rows && result.rows[0];
};

const adminGetCountryRecipeNameMaps = async (
  id: string | null
): Promise<ICountryRecipeNameMap[]> => {
  const query = await getSqlQuery('admin-get-country-to-recipe-name-maps.sql');
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [id]
  );
  return result.rows;
};

export const adminGetAllDbCountryRecipeNameMaps = async (): Promise<ICountryRecipeNameMap[]> =>
  adminGetCountryRecipeNameMaps(null);

export const adminGetOneDbCountryRecipeNameMap = async (
  id: string
): Promise<ICountryRecipeNameMap> => {
  const results = await adminGetCountryRecipeNameMaps(id);
  return results && results[0];
};

export const adminEditDbCountryRecipeNameMap = async (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQuery('admin-edit-country-to-recipe-name-map.sql');
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [
      item.id,
      item.name,
      item.country.id,
      item.recipe.id
    ]
  );
  return result.rows && result.rows[0];
};

export const adminDeleteDbCountryRecipeNameMap = async (
  id: string
): Promise<ICountryRecipeNameMap> => {
  const query = await getSqlQuery('admin-delete-country-to-recipe-name-map.sql');
  const result = await queryPostgres<ICountryRecipeNameMap>(
    query,
    [id]
  );
  return result.rows && result.rows[0];
};
