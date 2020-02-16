import { IFood } from '@chrisb-dev/seasonal-shared';
import { FOOD_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getSingleFood = async (id: string): Promise<IFood> =>
  makeAuthorizedRequest<IFood>(`${FOOD_URL}/${id}`);
