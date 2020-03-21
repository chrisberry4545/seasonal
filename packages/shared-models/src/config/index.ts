const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/v2';

export const SEASON_URL =
  process.env.SEASON_URL || `${BACKEND_URL}/season`;

export const FOOD_DETAILS_URL =
  process.env.FOOD_DETAILS_URL || `${BACKEND_URL}/food`;

export const SEASON_WITH_FOOD_URL =
  process.env.SEASON_WITH_FOOD_URL || `${BACKEND_URL}/season-with-food`;

export const SEASON_WITH_RECIPES_URL =
  process.env.SEASON_WITH_RECIPES_URL || `${BACKEND_URL}/season-with-recipes`;

export const COUNTRY_URL =
  process.env.COUNTRY_URL || `${BACKEND_URL}/country`;
