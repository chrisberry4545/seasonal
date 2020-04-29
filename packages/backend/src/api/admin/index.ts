import {
  Router
} from 'express';

import { appPassport } from './auth/app-passport';
import { adminAuth } from './auth/admin-auth';
import { editorAuth } from './auth/editor-auth';
import { adminLoginApi } from '../../admin-login/admin-login-api';
import { adminBadgeApi } from '../../admin-badge/admin-badge-api';
import { adminCountryApi } from '../../admin-country/admin-country-api';
import { adminCountryFoodNameMapApi } from '../../admin-country-food-name-map/admin-country-food-name-map-api';
import { adminCountryRecipeNameMapApi } from '../../admin-country-recipe-name-map/admin-country-recipe-name-map-api';
import { adminFoodApi } from '../../admin-food/admin-food-api';
import { adminRecipeApi } from '../../admin-recipe/admin-recipe-api';
import { adminRegionApi } from '../../admin-region/admin-region-api';
import { adminRegionFoodSeasonMapApi } from '../../admin-region-food-season-map/admin-region-food-season-map.api';
import { adminUserApi } from '../../admin-user/admin-user-api';
import { adminReportsApi } from './admin-reports';
import { errorMiddleware } from '../../middleware/error-middleware';
import {
  ENDPOINT_LOGIN,
  ENDPOINT_BADGE,
  ENDPOINT_COUNTRY,
  ENDPOINT_COUNTRY_RECIPE_NAME_MAP,
  ENDPOINT_COUNTRY_FOOD_NAME_MAP,
  ENDPOINT_FOOD_DETAILS,
  ENDPOINT_RECIPE,
  ENDPOINT_REGION,
  ENDPOINT_REGION_FOOD_SEASON_MAP,
  ENDPOINT_USER,
  ENDPOINT_REPORTS
} from '@chrisb-dev/seasonal-shared-models';

export const adminApi = (router = Router()) => {
  router.use(appPassport.initialize());
  router.use(appPassport.session());
  router.use(
    `/${ENDPOINT_LOGIN}`,
    adminLoginApi()
  );
  router.use(
    `/${ENDPOINT_BADGE}`,
    editorAuth,
    adminBadgeApi()
  ),
  router.use(
    `/${ENDPOINT_COUNTRY}`,
    editorAuth,
    adminCountryApi()
  );
  router.use(
    `/${ENDPOINT_COUNTRY_FOOD_NAME_MAP}`,
    editorAuth,
    adminCountryFoodNameMapApi()
  );
  router.use(
    `/${ENDPOINT_COUNTRY_RECIPE_NAME_MAP}`,
    editorAuth,
    adminCountryRecipeNameMapApi()
  );
  router.use(
    `/${ENDPOINT_FOOD_DETAILS}`,
    editorAuth,
    adminFoodApi()
  );
  router.use(
    `/${ENDPOINT_RECIPE}`,
    editorAuth,
    adminRecipeApi()
  );
  router.use(
    `/${ENDPOINT_REGION}`,
    editorAuth,
    adminRegionApi()
  );
  router.use(
    `/${ENDPOINT_REGION_FOOD_SEASON_MAP}`,
    editorAuth,
    adminRegionFoodSeasonMapApi()
  );
  router.use(
    `/${ENDPOINT_USER}`,
    adminAuth,
    adminUserApi()
  );
  router.use(
    `/${ENDPOINT_REPORTS}`,
    editorAuth,
    adminReportsApi()
  );
  router.use(errorMiddleware());
  return router;
};
