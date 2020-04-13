import {
  getCurrentSeasonWithFoodStartEpic$,
  getCurrentSeasonWithFoodEpic$,
  getCurrentSeasonWithRecipesStartEpic$,
  getCurrentSeasonWithRecipesEpic$,
  setSeasonSelectedSeasonName$
} from './current-season';

import {
  getAllBasicSeasonsStartEpic$,
  getAllBasicSeasonsEpic$
} from './all-basic-seasons';

import {
  getAllSeasonsWithFood$,
  getAllSeasonsWithRecipes$
} from './all-seasons';

import {
  getCurrentFoodDetailsEpic$,
  updateFoodDetailsOnDietTypeChangeEpic$
} from './current-food-details';
import {
  getCountriesStart$,
  getCountries$,
  promptCountryChangeOnNewDetected$,
  hideRegionChangePrompt$
} from './country';

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
