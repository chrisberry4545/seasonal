import {
  Router
} from 'express';

import {
  foodApi
} from './food-api.v2';

import {
  seasonApi
} from './season-api.v2';

import {
  seasonWithFoodApi
} from './season-with-food-api.v2';

import {
  seasonWithRecipesApi
} from './season-with-recipes-api.v2';

import { countryApi } from '../../country/country-api.v2';

import {
  ENDPOINT_COUNTRY,
  ENDPOINT_FOOD_DETAILS,
  ENDPOINT_SEASON,
  ENDPOINT_SEASON_WITH_FOOD,
  ENDPOINT_SEASON_WITH_RECIPES
} from '@chrisb-dev/seasonal-shared-models';

export const v2Api = (router = Router()) => {
  router.use(
    `/${ENDPOINT_COUNTRY}`,
    countryApi()
  );
  router.use(
    `/${ENDPOINT_FOOD_DETAILS}`,
    foodApi()
  );
  router.use(
    `/${ENDPOINT_SEASON}`,
    seasonApi()
  );
  router.use(
    `/${ENDPOINT_SEASON_WITH_FOOD}`,
    seasonWithFoodApi()
  );
  router.use(
    `/${ENDPOINT_SEASON_WITH_RECIPES}`,
    seasonWithRecipesApi()
  );
  return router;
};
