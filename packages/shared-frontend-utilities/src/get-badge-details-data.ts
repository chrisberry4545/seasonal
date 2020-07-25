import {
  BADGE_DETAILS_URL,
  IHydratedBadge,
  LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getBadgeDetailsData = (
  badgeId: string | null,
  regionId?: string,
  language?: LANGUAGES
): Promise<IHydratedBadge> => {
  const queryString = getQueryString(undefined, undefined, regionId, language);
  return fetch(`${BADGE_DETAILS_URL}/${badgeId}${queryString}`)
    .then(handleErrors);
};
