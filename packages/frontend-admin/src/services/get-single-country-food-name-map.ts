import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const getSingleCountryFoodNameMap = async (id: string): Promise<ICountryFoodNameMap> =>
  makeAuthorizedRequest<ICountryFoodNameMap>(`${COUNTRY_FOOD_NAME_MAP_URL}/${id}`);
