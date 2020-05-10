import { combineEpics } from 'redux-observable';

import { rootEpics } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { trackAction$ } from './tracking/epics';

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
  initAllSeasonsWithRecipesData$,
  goToBadgeLink$,
  goToBadgeDetails$,
  goBack$
} from './route/epics';

import {
  getStoredSettings$,
  storeSettings$,
  detectCountry$
} from './settings/epics';
import { initApp$ } from './init/epics';

export const rootEpic = combineEpics(
  ...rootEpics,
  initApp$,
  trackAction$,
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
  detectCountry$,
  goToBadgeLink$,
  goToBadgeDetails$,
  goBack$
);
