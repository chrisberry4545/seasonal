import {
  FOOD_DETAILS_URL,
  SEASON_URL,
  SEASON_WITH_FOOD_URL,
  SEASON_WITH_RECIPES_URL,
  COUNTRY_URL,
  IBaseSeason,
  IHydratedSeason,
  IHydratedFood,
  ICountry
} from '@chrisb-dev/seasonal-shared-models';

const getQueryString = (
  isVegetarian?: boolean, isVegan?: boolean, countryCode?: string
) => {
  const query = [
    isVegetarian && 'is-vegetarian=true',
    isVegan && 'is-vegan=true',
    countryCode && `country-code=${countryCode}`
  ].filter(Boolean).join('&');
  const queryString = query && `?${query}`;
  return queryString;
};

const handleErrors = async (resp: Response) => {
  const result = await resp.json();
  if (resp.status !== 200) {
    throw result;
  }
  return result;
};

export const getCurrentSeasonIndex = (): number => new Date().getUTCMonth();

export const getAllSeasons = (
  countryCode?: string
): Promise<IBaseSeason[]> => {
  const queryString = getQueryString(undefined, undefined, countryCode);
  return fetch(`${SEASON_URL}${queryString}`).then(handleErrors);
};

export const getSeasonWithFood = (
  seasonIndex: number,
  countryCode?: string
): Promise<IHydratedSeason> => {
  const queryString = getQueryString(undefined, undefined, countryCode);
  return fetch(
    `${SEASON_WITH_FOOD_URL}/${seasonIndex}${queryString}`
  ).then(handleErrors);
};

export const getAllSeasonsWithFood = (
  countryCode?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(undefined, undefined, countryCode);
  return fetch(`${SEASON_WITH_FOOD_URL}${queryString}`)
    .then(handleErrors);
};

export const getSeasonWithRecipes = (
  seasonIndex: number,
  isVegetarian?: boolean,
  isVegan?: boolean,
  countryCode?: string
): Promise<IHydratedSeason> => {
  const queryString = getQueryString(isVegetarian, isVegan, countryCode);
  return fetch(
    `${SEASON_WITH_RECIPES_URL}/${seasonIndex}${queryString}`
  ).then(handleErrors);
};

export const getAllSeasonsWithRecipes = (
  countryCode?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(undefined, undefined, countryCode);
  return fetch(`${SEASON_WITH_RECIPES_URL}${queryString}`)
    .then(handleErrors);
};

export const getFoodDetailsData = (
  foodId: string | null,
  isVegetarian?: boolean,
  isVegan?: boolean,
  countryCode?: string
): Promise<IHydratedFood> => {
  const queryString = getQueryString(isVegetarian, isVegan, countryCode);
  return fetch(`${FOOD_DETAILS_URL}/${foodId}${queryString}`)
    .then(handleErrors);
};

export const getCountries = (): Promise<ICountry[]> =>
  fetch(COUNTRY_URL).then(handleErrors);
