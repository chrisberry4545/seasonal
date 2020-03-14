import {
  currentFoodDetailsReducer
} from './current-food-details.reducer';

import { currentSeasonWithFoodReducer } from './current-season.reducer';

import { allBasicSeasonReducer } from './all-basic-seasons.reducer';

import {
  allSeasonsReducer
} from './all-seasons.reducer';

import { settingsReducer } from './settings.reducer';

import { uiReducer } from './ui.reducer';
import { countryReducer } from './country.reducer';

export const allReducers = {
  allBasicSeasonData: allBasicSeasonReducer,
  allSeasonsWithFoodData: allSeasonsReducer,
  countryData: countryReducer,
  currentFoodDetailsData: currentFoodDetailsReducer,
  currentSeasonData: currentSeasonWithFoodReducer,
  settings: settingsReducer,
  ui: uiReducer
};
