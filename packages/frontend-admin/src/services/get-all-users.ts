import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { USER_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllUsers = async (): Promise<IUser[]> =>
  makeAuthorizedRequest<IUser[]>(USER_URL);
