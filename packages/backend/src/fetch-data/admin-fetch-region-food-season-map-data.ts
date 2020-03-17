import {
  adminCreateDbRegionFoodSeasonMap,
  adminGetAllDbRegionFoodSeasonMaps,
  adminGetOneDbRegionFoodSeasonMap,
  adminEditDbRegionFoodSeasonMap,
  adminDeleteDbRegionFoodSeasonMap
} from '../data-access';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const adminCreateRegionFoodSeasonMap = (
  item: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> => adminCreateDbRegionFoodSeasonMap(item);

export const adminGetAllRegionFoodSeasonMaps = (): Promise<IRegionFoodSeasonMap[]> =>
  adminGetAllDbRegionFoodSeasonMaps();

export const adminGetOneRegionFoodSeasonMap = (
  id: string
): Promise<IRegionFoodSeasonMap | null> => adminGetOneDbRegionFoodSeasonMap(id);

export const adminEditRegionFoodSeasonMap = (
  item: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> => adminEditDbRegionFoodSeasonMap(item);

export const adminDeleteRegionFoodSeasonMap = (
  id: string
): Promise<IRegionFoodSeasonMap> => adminDeleteDbRegionFoodSeasonMap(id);
