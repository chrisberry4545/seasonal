import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { FOOD_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllFood = async (): Promise<IFood[]> =>
  makeAuthorizedRequest<IFood[]>(FOOD_URL);
