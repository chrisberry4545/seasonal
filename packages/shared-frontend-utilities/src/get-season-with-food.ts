import {
  SEASON_WITH_FOOD_URL,
  IHydratedSeason,
  LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getSeasonWithFood = (
  seasonIndex: number,
  regionId?: string,
  language?: LANGUAGES
): Promise<IHydratedSeason> => {
  const queryString = getQueryString(undefined, undefined, regionId, language);
  return fetch(
    `${SEASON_WITH_FOOD_URL}/${seasonIndex}${queryString}`
  ).then(handleErrors);
};
