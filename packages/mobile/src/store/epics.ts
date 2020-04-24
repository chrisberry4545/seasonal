import { combineEpics } from 'redux-observable';

import {
  rootEpics
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import {
  showFeedbackForm$,
  showStoreListing$,
  storeFeedbackSettings$,
  getStoredFeedbackSettings$,
  sendFeedbackImprovements$
} from './feedback/epics';

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
} from './route/epics';
import { initTrackingUser$, trackAction$ } from './tracking/epics';
import { storeSettings$, getStoredSettings$, detectCountry$ } from './settings/epics';
import { initApp$ } from './init/epics/init-app.epic';

export const rootEpic = combineEpics(
  ...rootEpics,
  initApp$,
  goToAboutUsPage$,
  goToSettingsPage$,
  goToRecipeLink$,
  goToFoodLink$,
  goBack$,
  goToFoodTable$,
  goToAllSeasonsView$,
  closeMenu$,
  openMenu$,
  initTrackingUser$,
  trackAction$,
  getStoredSettings$,
  storeSettings$,
  detectCountry$,
  storeFeedbackSettings$,
  getStoredFeedbackSettings$,
  showFeedbackForm$,
  sendFeedbackImprovements$,
  showStoreListing$
);
