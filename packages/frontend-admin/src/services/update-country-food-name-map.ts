import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';

export const updateCountryFoodNameMap = async (
  countryFoodNameMap: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> =>
  makeAuthorizedRequest<ICountryFoodNameMap>(COUNTRY_FOOD_NAME_MAP_URL, {
    body: JSON.stringify(countryFoodNameMap),
    method: 'PATCH'
  });
