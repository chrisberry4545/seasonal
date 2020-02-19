import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { COUNTRY_RECIPE_NAME_MAP_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getSingleCountryRecipeNameMap = async (id: string): Promise<ICountryRecipeNameMap> =>
  makeAuthorizedRequest<ICountryRecipeNameMap>(`${COUNTRY_RECIPE_NAME_MAP_URL}/${id}`);
