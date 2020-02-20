import {
  ITempRegionFoodSeasonMap
} from '../components-main/BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';
import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';

export const createRegionFoodSeasonMap = async (
  regionFoodSeasonMap: ITempRegionFoodSeasonMap
): Promise<ITempRegionFoodSeasonMap> =>
  makeAuthorizedRequest<ITempRegionFoodSeasonMap>(REGION_FOOD_SEASON_MAP_URL, {
    body: JSON.stringify(regionFoodSeasonMap),
    method: 'POST'
  });
