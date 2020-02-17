import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { RECIPE_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const deleteRecipe = async (id: string): Promise<IRecipe> =>
  makeAuthorizedRequest<IRecipe>(`${RECIPE_URL}/${id}`, {
    method: 'DELETE'
  });
