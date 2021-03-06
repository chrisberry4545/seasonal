import {
  FOOD_DETAILS_URL,
  IHydratedFood,
  LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { getQueryString } from './get-query-string';
import { handleErrors } from './handle-errors';

export const getFoodDetailsData = (
  foodId: string | null,
  isVegetarian?: boolean,
  isVegan?: boolean,
  regionId?: string,
  language?: LANGUAGES
): Promise<IHydratedFood> => {
  const queryString = getQueryString(isVegetarian, isVegan, regionId, language);
  return fetch(`${FOOD_DETAILS_URL}/${foodId}${queryString}`)
    .then(handleErrors);
};
