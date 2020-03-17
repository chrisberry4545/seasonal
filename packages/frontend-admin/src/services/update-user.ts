import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { USER_URL } from '../config';

export const updateUser = async (user: IUser): Promise<IUser> =>
  makeAuthorizedRequest<IUser>(USER_URL, {
    body: JSON.stringify(user),
    method: 'PATCH'
  });
