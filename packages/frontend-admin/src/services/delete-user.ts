import { IUser } from '@chrisb-dev/seasonal-shared';
import { USER_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const deleteUser = async (id: string): Promise<IUser> =>
  makeAuthorizedRequest<IUser>(`${USER_URL}/${id}`, {
    method: 'DELETE'
  });
