import {
  ENDPOINT_COUNTRY,
  ENDPOINT_FOOD_DETAILS,
  ENDPOINT_SEASON,
  ENDPOINT_SEASON_WITH_FOOD,
  ENDPOINT_SEASON_WITH_RECIPES,
  ENDPOINT_V2
} from './endpoint-urls';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  || `https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/${ENDPOINT_V2}`;

export const SEASON_URL =
  process.env.SEASON_URL || `${BACKEND_URL}/${ENDPOINT_SEASON}`;

export const FOOD_DETAILS_URL =
  process.env.FOOD_DETAILS_URL || `${BACKEND_URL}/${ENDPOINT_FOOD_DETAILS}`;

export const SEASON_WITH_FOOD_URL =
  process.env.SEASON_WITH_FOOD_URL || `${BACKEND_URL}/${ENDPOINT_SEASON_WITH_FOOD}`;

export const SEASON_WITH_RECIPES_URL =
  process.env.SEASON_WITH_RECIPES_URL || `${BACKEND_URL}/${ENDPOINT_SEASON_WITH_RECIPES}`;

export const COUNTRY_URL =
  process.env.COUNTRY_URL || `${BACKEND_URL}/${ENDPOINT_COUNTRY}`;