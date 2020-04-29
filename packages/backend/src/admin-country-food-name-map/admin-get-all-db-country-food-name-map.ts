import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbCountryFoodNameMaps } from './admin-get-db-country-food-name-maps';

export const adminGetAllDbCountryFoodNameMaps = async (): Promise<ICountryFoodNameMap[]> =>
  adminGetDbCountryFoodNameMaps(null);
