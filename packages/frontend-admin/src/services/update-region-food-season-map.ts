import { makeAuthorizedRequest } from './make-authorized-request';
import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import {
  ITempRegionFoodSeasonMap
} from '../components-main/BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';

export const updateRegionFoodSeasonMap = async (
  countryFoodSeasonMap: ITempRegionFoodSeasonMap
): Promise<ITempRegionFoodSeasonMap> =>
  makeAuthorizedRequest<ITempRegionFoodSeasonMap>(REGION_FOOD_SEASON_MAP_URL, {
    body: JSON.stringify(countryFoodSeasonMap),
    method: 'PATCH'
  });
