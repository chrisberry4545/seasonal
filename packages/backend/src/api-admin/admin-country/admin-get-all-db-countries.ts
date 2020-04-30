import { adminGetDbCountries } from './admin-get-db-countries';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const adminGetAllDbCountries = async (): Promise<ICountry[]> =>
  adminGetDbCountries(null);
