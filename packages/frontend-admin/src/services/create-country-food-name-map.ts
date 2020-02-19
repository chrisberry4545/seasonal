import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { makeAuthorizedRequest } from './make-authorized-request';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';

export const createCountryFoodNameMap = async (
  country: ICountryFoodNameMap
): Promise<ICountryFoodNameMap> =>
  makeAuthorizedRequest<ICountryFoodNameMap>(COUNTRY_FOOD_NAME_MAP_URL, {
    body: JSON.stringify(country),
    method: 'POST'
  });
