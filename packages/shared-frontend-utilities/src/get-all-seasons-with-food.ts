import {
  SEASON_WITH_FOOD_URL,
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getAllSeasonsWithFood = (
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(`${SEASON_WITH_FOOD_URL}${queryString}`)
    .then(handleErrors);
};