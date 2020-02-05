import {
  Router
} from 'express';

import { userApi } from './user-api';
import { appPassport } from './auth/app-passport';
import { loginApi } from './login-api';
import { adminAuth } from './auth/admin-auth';

export const adminApi = (router = Router()) => {
  router.use(appPassport.initialize());
  router.use(appPassport.session());
  router.use(
    `/login`,
    loginApi()
  );
  router.use(
    `/user`,
    adminAuth,
    userApi()
  );
  return router;
};
