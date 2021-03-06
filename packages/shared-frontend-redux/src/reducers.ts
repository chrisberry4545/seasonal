import {
  currentFoodDetailsReducer
} from './current-food-details';
import { currentSeasonWithFoodReducer } from './current-season';
import { allBasicSeasonsReducer } from './all-basic-seasons';
import {
  allSeasonsReducer
} from './all-seasons';
import { settingsReducer } from './settings';
import { uiReducer } from './ui';
import { countryReducer } from './country';
import { errorReducer } from './error';
import { currentBadgeDetailsReducer } from './current-badge-details';

export const allReducers = {
  allBasicSeasonData: allBasicSeasonsReducer,
  allSeasons: allSeasonsReducer,
  countryData: countryReducer,
  currentBadgeDetailsData: currentBadgeDetailsReducer,
  currentFoodDetailsData: currentFoodDetailsReducer,
  currentSeasonData: currentSeasonWithFoodReducer,
  error: errorReducer,
  settings: settingsReducer,
  ui: uiReducer
};
