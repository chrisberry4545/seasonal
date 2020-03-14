import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';

export const createRegionFoodSeasonMap = async (
  regionFoodSeasonMap: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> =>
  makeAuthorizedRequest<IRegionFoodSeasonMap>(REGION_FOOD_SEASON_MAP_URL, {
    body: JSON.stringify(regionFoodSeasonMap),
    method: 'POST'
  });
