import { IUser } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { USER_URL } from '../config';

export const updateUser = async (country: IUser): Promise<IUser> =>
  makeAuthorizedRequest<IUser>(USER_URL, {
    body: JSON.stringify(country),
    method: 'PATCH'
  });
