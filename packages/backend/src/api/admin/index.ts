import {
  Router
} from 'express';

import { appPassport } from './auth/app-passport';
import { adminAuth } from './auth/admin-auth';
import { editorAuth } from './auth/editor-auth';
import { loginApi } from './login-api';
import { countryApi } from './country-api';
import { countryFoodNameMapApi } from './country-food-name-map-api';
import { countryRecipeNameMapApi } from './country-recipe-name-map-api';
import { foodApi } from './food-api';
import { recipeApi } from './recipe-api';
import { regionApi } from './region-api';
import { regionFoodSeasonMapApi } from './region-food-season-map.api';
import { userApi } from './user-api';
import { errorMiddleware } from '../../middleware/error-middleware';
import {
  ENDPOINT_LOGIN,
  ENDPOINT_COUNTRY,
  ENDPOINT_COUNTRY_RECIPE_NAME_MAP,
  ENDPOINT_COUNTRY_FOOD_NAME_MAP,
  ENDPOINT_FOOD_DETAILS,
  ENDPOINT_RECIPE,
  ENDPOINT_REGION,
  ENDPOINT_REGION_FOOD_SEASON_MAP,
  ENDPOINT_USER
} from '@chrisb-dev/seasonal-shared-models';

export const adminApi = (router = Router()) => {
  router.use(appPassport.initialize());
  router.use(appPassport.session());
  router.use(
    `/${ENDPOINT_LOGIN}`,
    loginApi()
  );
  router.use(
    `/${ENDPOINT_COUNTRY}`,
    editorAuth,
    countryApi()
  );
  router.use(
    `/${ENDPOINT_COUNTRY_FOOD_NAME_MAP}`,
    editorAuth,
    countryFoodNameMapApi()
  );
  router.use(
    `/${ENDPOINT_COUNTRY_RECIPE_NAME_MAP}`,
    editorAuth,
    countryRecipeNameMapApi()
  );
  router.use(
    `/${ENDPOINT_FOOD_DETAILS}`,
    editorAuth,
    foodApi()
  );
  router.use(
    `/${ENDPOINT_RECIPE}`,
    editorAuth,
    recipeApi()
  );
  router.use(
    `/${ENDPOINT_REGION}`,
    editorAuth,
    regionApi()
  );
  router.use(
    `/${ENDPOINT_REGION_FOOD_SEASON_MAP}`,
    editorAuth,
    regionFoodSeasonMapApi()
  );
  router.use(
    `/${ENDPOINT_USER}`,
    adminAuth,
    userApi()
  );
  router.use(errorMiddleware());
  return router;
};
