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
  goToSettingsPage$,
  getAllSeasonsWithFoodStart$,
  getAllSeasonsWithRecipesStart$
} from './route/epics';
import { initTrackingUser$, trackActionEpic$ } from './tracking/epics';
import { storeSettings$, getStoredSettings$, detectCountry$ } from './settings/epics';
import { initAppEpic$ } from './init/epics/init-app.epic';

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
  getAllSeasonsWithFoodStart$,
  getAllSeasonsWithRecipesStart$,
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
