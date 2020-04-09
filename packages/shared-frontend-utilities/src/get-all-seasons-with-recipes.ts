import {
  SEASON_WITH_RECIPES_URL,
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getAllSeasonsWithRecipes = (
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(`${SEASON_WITH_RECIPES_URL}${queryString}`)
    .then(handleErrors);
};
