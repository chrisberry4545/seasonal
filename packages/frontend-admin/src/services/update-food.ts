import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { FOOD_URL } from '../config';

export const updateFood = async (food: IFood): Promise<IFood> =>
  makeAuthorizedRequest<IFood>(FOOD_URL, {
    body: JSON.stringify(food),
    method: 'PATCH'
  });
