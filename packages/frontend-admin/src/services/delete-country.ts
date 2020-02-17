import { ICountry } from '@chrisb-dev/seasonal-shared';
import { COUNTRY_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const deleteCountry = async (id: string): Promise<ICountry> =>
  makeAuthorizedRequest<ICountry>(`${COUNTRY_URL}/${id}`, {
    method: 'DELETE'
  });
