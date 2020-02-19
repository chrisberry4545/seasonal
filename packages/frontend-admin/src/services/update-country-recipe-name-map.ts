import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';

export const updateCountryRecipeNameMap = async (
  countryRecipeNameMap: ICountryRecipeNameMap
): Promise<ICountryRecipeNameMap> =>
  makeAuthorizedRequest<ICountryRecipeNameMap>(COUNTRY_RECIPE_NAME_MAP_URL, {
    body: JSON.stringify(countryRecipeNameMap),
    method: 'PATCH'
  });
