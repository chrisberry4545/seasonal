import {
  getCurrentSeasonWithFoodStart$,
  getCurrentSeasonWithFood$,
  getCurrentSeasonWithRecipesStart$,
  getCurrentSeasonWithRecipes$,
  setSeasonSelectedSeasonName$
} from './current-season/epics';
import {
  getAllBasicSeasonsStart$,
  getAllBasicSeasons$
} from './all-basic-seasons/epics';
import {
  getAllSeasonsWithFood$,
  getAllSeasonsWithRecipes$
} from './all-seasons/epics';
import {
  getCurrentBadgeDetails$,
  updateBadgeDetailsOnChange$
} from './current-badge-details/epics';
import {
  getCurrentFoodDetails$,
  updateFoodDetailsOnChange$
} from './current-food-details/epics';
import {
  getCountriesStart$,
  getCountries$,
  promptCountryChangeOnNewDetected$,
  hideRegionChangePrompt$
} from './country/epics';

export const rootEpics = [
  getCurrentSeasonWithFoodStart$,
  getCurrentSeasonWithFood$,
  getCurrentSeasonWithRecipesStart$,
  getCurrentSeasonWithRecipes$,
  getAllBasicSeasonsStart$,
  getAllBasicSeasons$,
  getAllSeasonsWithFood$,
  getAllSeasonsWithRecipes$,
  getCurrentBadgeDetails$,
  updateBadgeDetailsOnChange$,
  getCurrentFoodDetails$,
  updateFoodDetailsOnChange$,
  setSeasonSelectedSeasonName$,
  getCountriesStart$,
  getCountries$,
  promptCountryChangeOnNewDetected$,
  hideRegionChangePrompt$
];
