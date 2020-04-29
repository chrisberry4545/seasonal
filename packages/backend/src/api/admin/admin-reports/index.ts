import {
  Router
} from 'express';
import { adminReportFoodWithNoRecipes } from '../../../admin-report/admin-report-food-with-no-recipes';
import {
  ENDPOINT_FOOD_WITH_NO_RECIPES
} from '@chrisb-dev/seasonal-shared-models';

export const adminReportsApi = (router = Router()) => {
  router.use(
    `/${ENDPOINT_FOOD_WITH_NO_RECIPES}`,
    adminReportFoodWithNoRecipes()
  );
  return router;
};
