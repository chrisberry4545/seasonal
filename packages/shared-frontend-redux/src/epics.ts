import {
  getCurrentSeasonWithFoodStartEpic$,
  getCurrentSeasonWithFoodEpic$,
  getCurrentSeasonWithRecipesStartEpic$,
  getCurrentSeasonWithRecipesEpic$,
  setSeasonSelectedSeasonName$
} from './current-season/epics';

import {
  getAllBasicSeasonsStartEpic$,
  getAllBasicSeasonsEpic$
} from './all-basic-seasons/epics';

import {
  getAllSeasonsWithFood$,
  getAllSeasonsWithRecipes$
} from './all-seasons/epics';

import {
  getCurrentFoodDetailsEpic$,
  updateFoodDetailsOnDietTypeChangeEpic$
} from './current-food-details/epics';
import {
  getCountriesStart$,
  getCountries$,
  promptCountryChangeOnNewDetected$,
  hideRegionChangePrompt$
} from './country/epics';

export const rootEpics = [
  getCurrentSeasonWithFoodStartEpic$,
  getCurrentSeasonWithFoodEpic$,
  getCurrentSeasonWithRecipesStartEpic$,
  getCurrentSeasonWithRecipesEpic$,
  getAllBasicSeasonsStartEpic$,
  getAllBasicSeasonsEpic$,
  getAllSeasonsWithFood$,
  getAllSeasonsWithRecipes$,
  getCurrentFoodDetailsEpic$,
  updateFoodDetailsOnDietTypeChangeEpic$,
  setSeasonSelectedSeasonName$,
  getCountriesStart$,
  getCountries$,
  promptCountryChangeOnNewDetected$,
  hideRegionChangePrompt$
];
