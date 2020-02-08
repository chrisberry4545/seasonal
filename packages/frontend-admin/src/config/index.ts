const BACKEND_URL = process.env.BACKEND_URL
  || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/admin';

export const LOGIN_URL =
  process.env.LOGIN_URL || `${BACKEND_URL}/login`;

export const RECIPES_URL =
  process.env.RECIPES_URL || `${BACKEND_URL}/recipes`;
