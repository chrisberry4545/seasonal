import {
  SEASON_WITH_RECIPES_URL,
  IHydratedSeason
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getAllSeasonsWithRecipes = (
  isVegetarian?: boolean,
  isVegan?: boolean,
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(isVegetarian, isVegan, regionId);
  return fetch(`${SEASON_WITH_RECIPES_URL}${queryString}`)
    .then(handleErrors);
};
