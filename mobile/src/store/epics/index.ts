import { combineEpics } from 'redux-observable';

import {
  rootEpics
} from '@chrisb-dev/seasonal-shared';

import {
  goToAboutUsPage$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  closeMenu$,
  openMenu$,
  goToAllSeasonsView$,
  goBack$,
  goToSettingsPage$
} from './route.epics';
import { trackActionEpic$ } from './tracking.epics';
import { storeSettings$, getStoredSettings$, detectCountry$ } from './settings.epics';

export const rootEpic = combineEpics(
  ...rootEpics,
  goToAboutUsPage$,
  goToSettingsPage$,
  goToRecipeLink$,
  goToFoodLink$,
  goBack$,
  goToFoodTable$,
  goToAllSeasonsView$,
  closeMenu$,
  openMenu$,
  trackActionEpic$,
  getStoredSettings$,
  storeSettings$,
  detectCountry$
);
