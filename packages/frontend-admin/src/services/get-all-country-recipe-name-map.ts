import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getAllCountryRecipeNameMap = async (): Promise<ICountryRecipeNameMap[]> =>
  makeAuthorizedRequest<ICountryRecipeNameMap[]>(COUNTRY_RECIPE_NAME_MAP_URL);
