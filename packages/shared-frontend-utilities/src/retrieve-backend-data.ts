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
  isVegetarian?: boolean, isVegan?: boolean, regionId?: string
) => {
  const query = [
    isVegetarian && 'is-vegetarian=true',
    isVegan && 'is-vegan=true',
    regionId && `region-id=${regionId}`
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
  regionId?: string
): Promise<IBaseSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(`${SEASON_URL}${queryString}`).then(handleErrors);
};

export const getSeasonWithFood = (
  seasonIndex: number,
  regionId?: string
): Promise<IHydratedSeason> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(
    `${SEASON_WITH_FOOD_URL}/${seasonIndex}${queryString}`
  ).then(handleErrors);
};

export const getAllSeasonsWithFood = (
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(`${SEASON_WITH_FOOD_URL}${queryString}`)
    .then(handleErrors);
};

export const getSeasonWithRecipes = (
  seasonIndex: number,
  isVegetarian?: boolean,
  isVegan?: boolean,
  regionId?: string
): Promise<IHydratedSeason> => {
  const queryString = getQueryString(isVegetarian, isVegan, regionId);
  return fetch(
    `${SEASON_WITH_RECIPES_URL}/${seasonIndex}${queryString}`
  ).then(handleErrors);
};

export const getAllSeasonsWithRecipes = (
  regionId?: string
): Promise<IHydratedSeason[]> => {
  const queryString = getQueryString(undefined, undefined, regionId);
  return fetch(`${SEASON_WITH_RECIPES_URL}${queryString}`)
    .then(handleErrors);
};

export const getFoodDetailsData = (
  foodId: string | null,
  isVegetarian?: boolean,
  isVegan?: boolean,
  regionId?: string
): Promise<IHydratedFood> => {
  const queryString = getQueryString(isVegetarian, isVegan, regionId);
  return fetch(`${FOOD_DETAILS_URL}/${foodId}${queryString}`)
    .then(handleErrors);
};

export const getCountries = (): Promise<ICountry[]> =>
  fetch(COUNTRY_URL).then(handleErrors);
