import {
  adminCreateDbCountryFoodNameMap,
  adminGetAllDbCountryFoodNameMaps,
  adminGetOneDbCountryFoodNameMap,
  adminEditDbCountryFoodNameMap,
  adminDeleteDbCountryFoodNameMap
} from '../data-access';

import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';

export const adminCreateCountryFoodNameMap = (
  item: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> => adminCreateDbCountryFoodNameMap(item);

export const adminGetAllCountryFoodNameMaps = (): Promise<ICountryFoodNameMap[]> =>
  adminGetAllDbCountryFoodNameMaps();

export const adminGetOneCountryFoodNameMap = (
  id: string
): Promise<ICountryFoodNameMap | null> => adminGetOneDbCountryFoodNameMap(id);

export const adminEditCountryFoodNameMap = (
  item: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> => adminEditDbCountryFoodNameMap(item);

export const adminDeleteCountryFoodNameMap = (
  id: string
): Promise<ICountryFoodNameMap> => adminDeleteDbCountryFoodNameMap(id);
