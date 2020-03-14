import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { RECIPE_URL } from '../config';

export const createRecipe = async (recipe: IRecipe): Promise<IRecipe> =>
  makeAuthorizedRequest<IRecipe>(RECIPE_URL, {
    body: JSON.stringify(recipe),
    method: 'POST'
  });
