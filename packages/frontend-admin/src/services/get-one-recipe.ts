import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { RECIPE_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getOneRecipe = async (id: string): Promise<IRecipe> =>
  makeAuthorizedRequest<IRecipe>(`${RECIPE_URL}/${id}`);
