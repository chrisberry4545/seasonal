const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
  || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/admin';

export const LOGIN_URL =
  process.env.REACT_APP_LOGIN_URL || `${BACKEND_URL}/login`;

export const COUNTRY_URL =
  process.env.REACT_APP_COUNTRY_URL || `${BACKEND_URL}/country`;

export const COUNTRY_FOOD_NAME_MAP_URL =
  process.env.REACT_APP_COUNTRY_FOOD_NAME_MAP_URL || `${BACKEND_URL}/country-food-name-map`;

export const COUNTRY_RECIPE_NAME_MAP_URL =
  process.env.REACT_APP_COUNTRY_RECIPE_NAME_MAP_URL || `${BACKEND_URL}/country-recipe-name-map`;

export const FOOD_URL =
  process.env.REACT_APP_FOOD_URL || `${BACKEND_URL}/food`;

export const RECIPE_URL =
  process.env.REACT_APP_RECIPE_URL || `${BACKEND_URL}/recipe`;

export const REGION_URL =
  process.env.REACT_APP_REGION_URL || `${BACKEND_URL}/region`;

export const USER_URL =
  process.env.REACT_APP_USER_URL || `${BACKEND_URL}/user`;
