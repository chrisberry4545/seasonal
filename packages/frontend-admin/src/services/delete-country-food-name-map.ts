import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import { COUNTRY_FOOD_NAME_MAP_URL } from '../config';
import { makeAuthorizedRequest } from './make-authorized-request';

export const deleteCountryToFoodNameMap = async (
  id: string
): Promise<ICountryFoodNameMap> =>
  makeAuthorizedRequest<ICountryFoodNameMap>(`${COUNTRY_FOOD_NAME_MAP_URL}/${id}`, {
    method: 'DELETE'
  });
