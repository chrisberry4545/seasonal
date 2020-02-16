const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
    || 'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/v1';

export const SEASON_DATA_URL =
  process.env.REACT_APP_SEASON_DATA_URL || `${BACKEND_URL}/season-data`;

export const FOOD_DETAILS_DATA_URL =
  process.env.REACT_APP_FOOD_DETAILS_DATA_URL || `${BACKEND_URL}/food-data`;
