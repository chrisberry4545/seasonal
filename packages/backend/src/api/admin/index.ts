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

export const adminApi = (router = Router()) => {
  router.use(appPassport.initialize());
  router.use(appPassport.session());
  router.use(
    `/login`,
    loginApi()
  );
  router.use(
    `/country`,
    editorAuth,
    countryApi()
  );
  router.use(
    `/country-food-name-map`,
    editorAuth,
    countryFoodNameMapApi()
  );
  router.use(
    `/country-recipe-name-map`,
    editorAuth,
    countryRecipeNameMapApi()
  );
  router.use(
    `/food`,
    editorAuth,
    foodApi()
  );
  router.use(
    `/recipe`,
    editorAuth,
    recipeApi()
  );
  router.use(
    `/region`,
    editorAuth,
    regionApi()
  );
  router.use(
    `/region-food-season-map`,
    editorAuth,
    regionFoodSeasonMapApi()
  );
  router.use(
    `/user`,
    adminAuth,
    userApi()
  );
  return router;
};
