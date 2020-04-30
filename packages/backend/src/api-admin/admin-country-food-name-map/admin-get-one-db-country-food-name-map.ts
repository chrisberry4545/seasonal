import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { adminGetDbCountryFoodNameMaps } from './admin-get-db-country-food-name-maps';

export const adminGetOneDbCountryFoodNameMap = async (
  id: string
): Promise<ICountryFoodNameMap> => {
  const results = await adminGetDbCountryFoodNameMaps(id);
  return results && results[0];
};
