import {
  Router
} from 'express';

import { appPassport } from '../auth/app-passport';
import { adminAuth } from '../auth/admin-auth';
import { editorAuth } from '../auth/editor-auth';
import { apiAdminLogin } from './admin-login/api-admin-login';
import { apiAdminBadge } from './admin-badge/api-admin-badge';
import { apiAdminCountry } from './admin-country/api-admin-country';
import { apiAdminCountryFoodNameMap } from './admin-country-food-name-map/api-admin-country-food-name-map';
import { apiAdminCountryRecipeNameMap } from './admin-country-recipe-name-map/api-admin-country-recipe-name-map';
import { apiAdminFood } from './admin-food/api-admin-food';
import { apiAdminRecipe } from './admin-recipe/api-admin-recipe';
import { apiAdminRegion } from './admin-region/api-admin-region';
import { apiAdminRegionFoodSeasonMap } from './admin-region-food-season-map/api-admin-region-food-season-map';
import { apiAdminTranslationsBadgeName } from './admin-translations-badge-name/api-admin-translations-badge-name';
import { apiAdminTranslationsCountryName } from './admin-translations-country-name/api-admin-translations-country-name';
import { apiAdminTranslationsRegionName } from './admin-translations-region-name/api-admin-translations-region-name';
import { apiAdminTranslationsSeasonName } from './admin-translations-season-name/api-admin-translations-season-name';
import { apiAdminUser } from './admin-user/api-admin-user';
import { apiAdminReports } from './admin-reports/api-admin-reports';
import { errorMiddleware } from '../middleware/error-middleware';
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
  ENDPOINT_TRANSLATIONS_BADGE_NAME,
  ENDPOINT_TRANSLATIONS_COUNTRY_NAME,
  ENDPOINT_TRANSLATIONS_REGION_NAME,
  ENDPOINT_TRANSLATIONS_SEASON_NAME,
  ENDPOINT_USER,
  ENDPOINT_REPORTS
} from '@chrisb-dev/seasonal-shared-models';

export const apiAdmin = (router = Router()) => {
  router.use(appPassport.initialize());
  router.use(appPassport.session());
  router.use(
    `/${ENDPOINT_LOGIN}`,
    apiAdminLogin()
  );
  router.use(
    `/${ENDPOINT_BADGE}`,
    editorAuth(),
    apiAdminBadge()
  ),
  router.use(
    `/${ENDPOINT_COUNTRY}`,
    editorAuth(),
    apiAdminCountry()
  );
  router.use(
    `/${ENDPOINT_COUNTRY_FOOD_NAME_MAP}`,
    editorAuth(),
    apiAdminCountryFoodNameMap()
  );
  router.use(
    `/${ENDPOINT_COUNTRY_RECIPE_NAME_MAP}`,
    editorAuth(),
    apiAdminCountryRecipeNameMap()
  );
  router.use(
    `/${ENDPOINT_FOOD_DETAILS}`,
    editorAuth(),
    apiAdminFood()
  );
  router.use(
    `/${ENDPOINT_RECIPE}`,
    editorAuth(),
    apiAdminRecipe()
  );
  router.use(
    `/${ENDPOINT_REGION}`,
    editorAuth(),
    apiAdminRegion()
  );
  router.use(
    `/${ENDPOINT_REGION_FOOD_SEASON_MAP}`,
    editorAuth(),
    apiAdminRegionFoodSeasonMap()
  );
  router.use(
    `/${ENDPOINT_TRANSLATIONS_BADGE_NAME}`,
    editorAuth(),
    apiAdminTranslationsBadgeName()
  );
  router.use(
    `/${ENDPOINT_TRANSLATIONS_COUNTRY_NAME}`,
    editorAuth(),
    apiAdminTranslationsCountryName()
  );
  router.use(
    `/${ENDPOINT_TRANSLATIONS_REGION_NAME}`,
    editorAuth(),
    apiAdminTranslationsRegionName()
  );
  router.use(
    `/${ENDPOINT_TRANSLATIONS_SEASON_NAME}`,
    editorAuth(),
    apiAdminTranslationsSeasonName()
  );
  router.use(
    `/${ENDPOINT_USER}`,
    adminAuth(),
    apiAdminUser()
  );
  router.use(
    `/${ENDPOINT_REPORTS}`,
    editorAuth(),
    apiAdminReports()
  );
  router.use(errorMiddleware());
  return router;
};
