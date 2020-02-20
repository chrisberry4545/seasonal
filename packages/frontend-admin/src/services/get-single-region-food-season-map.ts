import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';
import {
  ITempRegionFoodSeasonMap
} from '../components-main/BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';

export const getSingleRegionFoodSeasonMap = async (
  id: string
): Promise<ITempRegionFoodSeasonMap> =>
  makeAuthorizedRequest<ITempRegionFoodSeasonMap>(
    `${REGION_FOOD_SEASON_MAP_URL}/${id}`
  );
