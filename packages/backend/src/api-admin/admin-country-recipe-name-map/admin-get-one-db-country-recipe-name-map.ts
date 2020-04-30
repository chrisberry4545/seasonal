import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbCountryRecipeNameMaps } from './admin-get-db-country-recipe-name-maps';

export const adminGetOneDbCountryRecipeNameMap = async (
  id: string
): Promise<ICountryRecipeNameMap> => {
  const results = await adminGetDbCountryRecipeNameMaps(id);
  return results && results[0];
};
