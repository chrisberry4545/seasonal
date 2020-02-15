const BACKEND_URL = process.env.BACKEND_URL
  || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/admin';

export const LOGIN_URL =
  process.env.LOGIN_URL || `${BACKEND_URL}/login`;

export const COUNTRY_URL =
  process.env.COUNTRY_URL || `${BACKEND_URL}/country`;

export const FOOD_URL =
  process.env.FOOD_URL || `${BACKEND_URL}/food`;

export const RECIPE_URL =
  process.env.RECIPE_URL || `${BACKEND_URL}/recipe`;

export const REGION_URL =
  process.env.REGION_URL || `${BACKEND_URL}/region`;

export const USER_URL =
  process.env.USER_URL || `${BACKEND_URL}/user`;
