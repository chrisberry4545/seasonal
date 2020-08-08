import {
  trackAction$
} from './track-action.epic';
import * as helpers from '../../../helpers';
import { of } from 'rxjs';
import {
  selectSeason,
  foodDetailsSelectSeason,
  openMenu,
  recipeItemClicked,
  foodItemClicked,
  badgeDetailsSelectFood,
  setRegion,
  setLanguage,
  setCurrentFoodDetailsOnChange,
  setCurrentFoodDetailsSuccess,
  setDietType,
  showLocationPopup,
  showSearchBar,
  userRegionDetected,
  setError,
  toggleListView,
  setLanguageSuccess
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { goBackFromFoodDetails, goToAboutUsPage } from '../../route';
import { IHydratedFood, DIET_TYPE, IBackendError, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import {
  sendFeedbackDoNotLikeApp,
  sendFeedbackLikeApp,
  sendFeedbackDoNotWantToRate,
  sendFeedbackWantToRate,
  sendFeedbackImprovementsSuccess,
  showFeedbackPopup,
  closeFeedbackPopup
} from '../../feedback';
import { trackEvent } from '../../../helpers';

describe.each([
  selectSeason(1),
  foodDetailsSelectSeason(1),
  openMenu(),
  goBackFromFoodDetails(),
  goToAboutUsPage(),
  recipeItemClicked('1'),
  foodItemClicked('1'),
  badgeDetailsSelectFood('1'),
  setRegion('region'),
  setLanguage(LANGUAGES.EN_US),
  setLanguageSuccess(),
  setCurrentFoodDetailsOnChange(),
  setCurrentFoodDetailsSuccess({} as IHydratedFood),
  setDietType(DIET_TYPE.VEGAN),
  showLocationPopup(),
  showSearchBar(),
  sendFeedbackDoNotLikeApp(),
  sendFeedbackLikeApp(),
  sendFeedbackDoNotWantToRate(),
  sendFeedbackWantToRate(),
  sendFeedbackImprovementsSuccess('improvements'),
  showFeedbackPopup(),
  closeFeedbackPopup(),
  userRegionDetected('regionId', null),
  setError({} as IBackendError),
  toggleListView()
])('trackAction$', (action) => {
  let mockTrackEvent: jest.SpyInstance;

  beforeEach(async () => {
    mockTrackEvent = jest.spyOn(helpers, 'trackEvent');
    mockTrackEvent.mockClear();
    await trackAction$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('calls trackEvent', () => {
    const { type, ...rest } = action;
    expect(trackEvent).toHaveBeenCalledWith(type, rest);
  });

});
