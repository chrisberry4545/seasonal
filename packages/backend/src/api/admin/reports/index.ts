import {
  Router
} from 'express';

import { foodWithNoRecipes } from './food-with-no-recipes';
import {
  ENDPOINT_FOOD_WITH_NO_RECIPES
} from '@chrisb-dev/seasonal-shared-models';

export const reportsApi = (router = Router()) => {
  router.use(
    `/${ENDPOINT_FOOD_WITH_NO_RECIPES}`,
    foodWithNoRecipes()
  );
  return router;
};
