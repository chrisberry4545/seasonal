import {
  Router
} from 'express';

import { appPassport } from './auth/app-passport';
import { adminAuth } from './auth/admin-auth';
import { loginApi } from './login-api';
import { countryApi } from './country-api';
import { foodApi } from './food-api';
import { recipeApi } from './recipe-api';
import { regionApi } from './region-api';
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
    `/user`,
    adminAuth,
    userApi()
  );
  return router;
};
