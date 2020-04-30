import {
  Router
} from 'express';

import {
  apiFood
} from './food/api-food.v2';

import {
  apiSeason
} from './season/api-season.v2';

import {
  apiSeasonWithFood
} from './season-with-food/api-season-with-food.v2';

import {
  apiSeasonWithRecipes
} from './season-with-recipes/api-season-with-recipes.v2';

import { apiCountry } from './country/api-country.v2';

import {
  ENDPOINT_COUNTRY,
  ENDPOINT_FOOD_DETAILS,
  ENDPOINT_SEASON,
  ENDPOINT_SEASON_WITH_FOOD,
  ENDPOINT_SEASON_WITH_RECIPES
} from '@chrisb-dev/seasonal-shared-models';

export const apiV2 = (router = Router()) => {
  router.use(
    `/${ENDPOINT_COUNTRY}`,
    apiCountry()
  );
  router.use(
    `/${ENDPOINT_FOOD_DETAILS}`,
    apiFood()
  );
  router.use(
    `/${ENDPOINT_SEASON}`,
    apiSeason()
  );
  router.use(
    `/${ENDPOINT_SEASON_WITH_FOOD}`,
    apiSeasonWithFood()
  );
  router.use(
    `/${ENDPOINT_SEASON_WITH_RECIPES}`,
    apiSeasonWithRecipes()
  );
  return router;
};
