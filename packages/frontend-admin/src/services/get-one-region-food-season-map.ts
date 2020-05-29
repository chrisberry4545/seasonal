import { REGION_FOOD_SEASON_MAP_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';
import { IRegionFoodSeasonMap } from '@chrisb-dev/seasonal-shared-models';

export const getOneRegionFoodSeasonMap = async (
  id: string
): Promise<IRegionFoodSeasonMap> =>
  makeAuthorizedRequest<IRegionFoodSeasonMap>(
    `${REGION_FOOD_SEASON_MAP_URL}/${id}`
  );
