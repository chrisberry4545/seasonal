import {
  Router
} from 'express';

import {
  apiBadgeV2
} from './badge/api-badge.v2';

import {
  apiFoodV2
} from './food/api-food.v2';

import {
  apiSeasonV2
} from './season/api-season.v2';

import {
  apiSeasonWithFoodV2
} from './season-with-food/api-season-with-food.v2';

import {
  apiSeasonWithRecipesV2
} from './season-with-recipes/api-season-with-recipes.v2';

import { apiCountryV2 } from './country/api-country.v2';

import {
  ENDPOINT_BADGE_DETAILS,
  ENDPOINT_COUNTRY,
  ENDPOINT_FOOD_DETAILS,
  ENDPOINT_SEASON,
  ENDPOINT_SEASON_WITH_FOOD,
  ENDPOINT_SEASON_WITH_RECIPES
} from '@chrisb-dev/seasonal-shared-models';

export const apiV2 = (router = Router()) => {
  router.use(
    `/${ENDPOINT_BADGE_DETAILS}`,
    apiBadgeV2()
  );
  router.use(
    `/${ENDPOINT_COUNTRY}`,
    apiCountryV2()
  );
  router.use(
    `/${ENDPOINT_FOOD_DETAILS}`,
    apiFoodV2()
  );
  router.use(
    `/${ENDPOINT_SEASON}`,
    apiSeasonV2()
  );
  router.use(
    `/${ENDPOINT_SEASON_WITH_FOOD}`,
    apiSeasonWithFoodV2()
  );
  router.use(
    `/${ENDPOINT_SEASON_WITH_RECIPES}`,
    apiSeasonWithRecipesV2()
  );
  return router;
};
