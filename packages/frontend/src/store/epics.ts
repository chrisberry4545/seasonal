import { combineEpics } from 'redux-observable';

import { rootEpics } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { trackActionEpic$ } from './tracking/tracking.epics';

import {
  goToWebVersion$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  goToFoodDetails$,
  initFoodDetails$,
  initAllSeasonsWithFoodData$,
  goToAllSeasonsView$,
  goToSettingsPage$,
  initAllSeasonsWithRecipesData$
} from './route/epics';

import {
  getStoredSettings$,
  storeSettings$,
  detectCountry$
} from './settings/settings.epics';
import { initAppEpic$ } from './init/epics';

export const rootEpic = combineEpics(
  ...rootEpics,
  initAppEpic$,
  trackActionEpic$,
  goToWebVersion$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodDetails$,
  initFoodDetails$,
  initAllSeasonsWithFoodData$,
  initAllSeasonsWithRecipesData$,
  goToFoodTable$,
  goToAllSeasonsView$,
  getStoredSettings$,
  storeSettings$,
  goToSettingsPage$,
  detectCountry$
);
