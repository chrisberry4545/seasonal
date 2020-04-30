import {
  Router
} from 'express';
import {
  apiAdminReportFoodWithNoRecipes
} from './admin-report-food-with-no-recipes/api-admin-report-food-with-no-recipes';
import {
  ENDPOINT_FOOD_WITH_NO_RECIPES
} from '@chrisb-dev/seasonal-shared-models';

export const apiAdminReports = (router = Router()) => {
  router.use(
    `/${ENDPOINT_FOOD_WITH_NO_RECIPES}`,
    apiAdminReportFoodWithNoRecipes()
  );
  return router;
};
