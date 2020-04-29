import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbCountryRecipeNameMaps } from './admin-get-db-country-recipe-name-maps';

export const adminGetAllDbCountryRecipeNameMaps = async (): Promise<ICountryRecipeNameMap[]> =>
  adminGetDbCountryRecipeNameMaps(null);
