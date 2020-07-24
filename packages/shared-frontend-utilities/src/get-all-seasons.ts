import {
  SEASON_URL,
  IBaseSeason,
  LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getAllSeasons = (
  regionId?: string,
  language?: LANGUAGES
): Promise<IBaseSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId, language);
  return fetch(`${SEASON_URL}${queryString}`).then(handleErrors);
};
