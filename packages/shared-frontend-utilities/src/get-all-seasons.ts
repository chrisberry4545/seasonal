import {
  SEASON_URL,
  IBaseSeason
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getAllSeasons = (
  regionId?: string
): Promise<IBaseSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(`${SEASON_URL}${queryString}`).then(handleErrors);
};
