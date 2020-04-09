import {
  COUNTRY_URL,
  ICountry
} from '@chrisb-dev/seasonal-shared-models';
import { handleErrors } from './handle-errors';

export const getCountries = (): Promise<ICountry[]> =>
  fetch(COUNTRY_URL).then(handleErrors);
