import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { RECIPE_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllRecipes = async (): Promise<IRecipe[]> =>
  makeAuthorizedRequest<IRecipe[]>(RECIPE_URL);
