import { combineEpics } from 'redux-observable';

import { rootEpics } from '@chrisb-dev/seasonal-shared';
import { trackActionEpic$ } from './tracking.epics';

import {
  goToWebVersion$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  goToFoodDetails$,
  initFoodDetails$,
  initAllSeasonsWithFoodData$,
  goToAllSeasonsView$,
  goBack$
} from './route.epics';

import {
  getStoredSettings$,
  storeSettings$
} from './settings.epics';

export const rootEpic = combineEpics(
  ...rootEpics,
  trackActionEpic$,
  goToWebVersion$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodDetails$,
  goBack$,
  initFoodDetails$,
  initAllSeasonsWithFoodData$,
  goToFoodTable$,
  goToAllSeasonsView$,
  getStoredSettings$,
  storeSettings$
);
