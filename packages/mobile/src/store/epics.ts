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
} from './feedback/epics/feedback.epics';

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
} from './route/epics/route.epics';
import { initTrackingUser$, trackActionEpic$ } from './tracking/epics/tracking.epics';
import { storeSettings$, getStoredSettings$, detectCountry$ } from './settings/epics/settings.epics';
import { initAppEpic$ } from './init/epics/init.epics';

export const rootEpic = combineEpics(
  ...rootEpics,
  initAppEpic$,
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
