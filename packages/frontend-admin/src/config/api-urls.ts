const ADMIN_BACKEND_URL = process.env.REACT_APP_ADMIN_BACKEND_URL
  || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/admin';

export const LOGIN_URL =
  process.env.REACT_APP_LOGIN_URL || `${ADMIN_BACKEND_URL}/login`;

export const COUNTRY_URL =
  process.env.REACT_APP_COUNTRY_URL || `${ADMIN_BACKEND_URL}/country`;

export const COUNTRY_FOOD_NAME_MAP_URL =
  process.env.REACT_APP_COUNTRY_FOOD_NAME_MAP_URL || `${ADMIN_BACKEND_URL}/country-food-name-map`;

export const REGION_FOOD_SEASON_MAP_URL =
  process.env.REACT_APP_REGION_FOOD_SEASON_MAP_URL || `${ADMIN_BACKEND_URL}/region-food-season-map`;

export const COUNTRY_RECIPE_NAME_MAP_URL =
  process.env.REACT_APP_COUNTRY_RECIPE_NAME_MAP_URL || `${ADMIN_BACKEND_URL}/country-recipe-name-map`;

export const FOOD_URL =
  process.env.REACT_APP_FOOD_URL || `${ADMIN_BACKEND_URL}/food`;

export const RECIPE_URL =
  process.env.REACT_APP_RECIPE_URL || `${ADMIN_BACKEND_URL}/recipe`;

export const REGION_URL =
  process.env.REACT_APP_REGION_URL || `${ADMIN_BACKEND_URL}/region`;

export const USER_URL =
  process.env.REACT_APP_USER_URL || `${ADMIN_BACKEND_URL}/user`;
