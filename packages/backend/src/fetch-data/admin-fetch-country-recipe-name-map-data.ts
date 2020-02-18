import {
  adminCreateDbCountryRecipeNameMap,
  adminGetAllDbCountryRecipeNameMaps,
  adminGetOneDbCountryRecipeNameMap,
  adminEditDbCountryRecipeNameMap,
  adminDeleteDbCountryRecipeNameMap
} from '../data-access';

import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';

export const adminCreateCountryRecipeNameMap = (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => adminCreateDbCountryRecipeNameMap(item);

export const adminGetAllCountryRecipeNameMaps = (): Promise<ICountryRecipeNameMap[]> =>
  adminGetAllDbCountryRecipeNameMaps();

export const adminGetOneCountryRecipeNameMap = (
  id: string
): Promise<ICountryRecipeNameMap | null> => adminGetOneDbCountryRecipeNameMap(id);

export const adminEditCountryRecipeNameMap = (
  item: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> => adminEditDbCountryRecipeNameMap(item);

export const adminDeleteCountryRecipeNameMap = (
  id: string
): Promise<ICountryRecipeNameMap> => adminDeleteDbCountryRecipeNameMap(id);
