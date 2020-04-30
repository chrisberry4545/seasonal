import { adminGetDbCountries } from './admin-get-db-countries';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const adminGetOneDbCountry = async (
  id: string
): Promise<ICountry> => {
  const results = await adminGetDbCountries(id);
  return results && results[0];
};
