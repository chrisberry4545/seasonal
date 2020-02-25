import {
  Router
} from 'express';

import { appPassport } from './auth/app-passport';
import { adminAuth } from './auth/admin-auth';
import { loginApi } from './login-api';
import { countryApi } from './country-api';
import { countryFoodNameMapApi } from './country-food-name-map-api';
import { countryRecipeNameMapApi } from './country-recipe-name-map-api';
import { foodApi } from './food-api';
import { recipeApi } from './recipe-api';
import { regionApi } from './region-api';
import { regionFoodSeasonMapApi } from './region-food-season-map.api';
import { userApi } from './user-api';

export const adminApi = (router = Router()) => {
  router.use(appPassport.initialize());
  router.use(appPassport.session());
  router.use(
    `/login`,
    loginApi()
  );
  router.use(
    `/country`,
    adminAuth,
    countryApi()
  );
  router.use(
    `/country-food-name-map`,
    adminAuth,
    countryFoodNameMapApi()
  );
  router.use(
    `/country-recipe-name-map`,
    adminAuth,
    countryRecipeNameMapApi()
  );
  router.use(
    `/food`,
    adminAuth,
    foodApi()
  );
  router.use(
    `/recipe`,
    adminAuth,
    recipeApi()
  );
  router.use(
    `/region`,
    adminAuth,
    regionApi()
  );
  router.use(
    `/region-food-season-map`,
    adminAuth,
    regionFoodSeasonMapApi()
  );
  router.use(
    `/user`,
    adminAuth,
    userApi()
  );
  return router;
};
