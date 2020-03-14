import {
  adminCreateDbCountry,
  adminGetAllDbCountries,
  adminGetOneDbCountry,
  adminEditDbCountry,
  adminDeleteDbCountry
} from '../data-access';

import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateCountry = (
  item: ICountry
): Promise<ICountry> => adminCreateDbCountry(item);

export const adminGetAllCountries = (): Promise<ICountry[]> =>
  adminGetAllDbCountries();

export const adminGetOneCountry = (
  id: string
): Promise<ICountry | null> => adminGetOneDbCountry(id);

export const adminEditCountry = (
  item: ICountry
): Promise<ICountry> => adminEditDbCountry(item);

export const adminDeleteCountry = (
  id: string
): Promise<ICountry> => adminDeleteDbCountry(id);
