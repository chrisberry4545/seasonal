import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { FOOD_WITH_NO_RECIPES_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getReportFoodWithNoRecipes = async (): Promise<IFood[]> =>
  makeAuthorizedRequest<IFood[]>(FOOD_WITH_NO_RECIPES_URL);
