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
  getAllSeasonsWithRecipesStart$,
  goToBadgeLink$
} from './route/epics';
import { initTrackingUser$, trackAction$ } from './tracking/epics';
import { storeSettings$, getStoredSettings$, detectCountry$, setLanguage$ } from './settings/epics';
import { initApp$ } from './init/epics/init-app.epic';
import { getLanguages$ } from './language/epics/get-languages.epic';
import { getLanguagesStart$ } from './language/epics/get-languages-start.epic';

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
  getAllSeasonsWithFoodStart$,
  getAllSeasonsWithRecipesStart$,
  openMenu$,
  initTrackingUser$,
  trackAction$,
  getStoredSettings$,
  setLanguage$,
  storeSettings$,
  detectCountry$,
  storeFeedbackSettings$,
  getStoredFeedbackSettings$,
  getLanguagesStart$,
  getLanguages$,
  showFeedbackForm$,
  sendFeedbackImprovements$,
  showStoreListing$,
  goToBadgeLink$
);
