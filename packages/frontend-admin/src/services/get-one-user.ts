import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { USER_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getOneUser = async (id: string): Promise<IUser> =>
  makeAuthorizedRequest<IUser>(`${USER_URL}/${id}`);
