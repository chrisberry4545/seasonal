import {
  Router
} from 'express';

import { appPassport } from './auth/app-passport';
import { adminAuth } from './auth/admin-auth';
import { loginApi } from './login-api';
import { countryApi } from './country-api';
import { recipeApi } from './recipe-api';
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
    `/recipe`,
    adminAuth,
    recipeApi()
  );
  router.use(
    `/user`,
    adminAuth,
    userApi()
  );
  return router;
};
