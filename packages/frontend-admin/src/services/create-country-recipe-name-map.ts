import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { makeAuthorizedRequest } from './make-authorized-request';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';

export const createCountryRecipeNameMap = async (
  country: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> =>
  makeAuthorizedRequest<ICountryRecipeNameMap>(COUNTRY_RECIPE_NAME_MAP_URL, {
    body: JSON.stringify(country),
    method: 'POST'
  });
