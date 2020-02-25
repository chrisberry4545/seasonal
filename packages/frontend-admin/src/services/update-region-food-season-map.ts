import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared';

export const updateRegionFoodSeasonMap = async (
  countryFoodSeasonMap: IRegionFoodSeasonMap
): Promise<IRegionFoodSeasonMap> =>
  makeAuthorizedRequest<IRegionFoodSeasonMap>(REGION_FOOD_SEASON_MAP_URL, {
    body: JSON.stringify(countryFoodSeasonMap),
    method: 'PATCH'
  });
