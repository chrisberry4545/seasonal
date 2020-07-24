import {
  COUNTRY_URL,
  ICountry,
  LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { handleErrors } from './handle-errors';
import { getQueryString } from './get-query-string';

export const getCountries = (
  language?: LANGUAGES
): Promise<ICountry[]> => {
  const queryString = getQueryString(undefined, undefined, undefined, language);
  return fetch(`${COUNTRY_URL}${queryString}`).then(handleErrors);
};
