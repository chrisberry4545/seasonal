import { combineEpics } from 'redux-observable';

import {
  rootEpics
} from '@chrisb-dev/seasonal-shared-models';

import {
  showFeedbackForm$,
  showStoreListing$,
  storeFeedbackSettings$,
  getStoredFeedbackSettings$,
  sendFeedbackImprovements$
} from './feedback.epics';

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
import { initTrackingUser$, trackActionEpic$ } from './tracking.epics';
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
  initTrackingUser$,
  trackActionEpic$,
  getStoredSettings$,
  storeSettings$,
  detectCountry$,
  storeFeedbackSettings$,
  getStoredFeedbackSettings$,
  showFeedbackForm$,
  sendFeedbackImprovements$,
  showStoreListing$
);
