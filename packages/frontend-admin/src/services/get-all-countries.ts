import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { COUNTRY_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllCountries = async (): Promise<ICountry[]> =>
  makeAuthorizedRequest<ICountry[]>(COUNTRY_URL);
