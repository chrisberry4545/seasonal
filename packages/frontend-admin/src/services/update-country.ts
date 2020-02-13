import { ICountry } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { COUNTRY_URL } from '../config';

export const updateCountry = async (country: ICountry): Promise<ICountry> =>
  makeAuthorizedRequest<ICountry>(COUNTRY_URL, {
    body: JSON.stringify(country),
    method: 'PATCH'
  });
