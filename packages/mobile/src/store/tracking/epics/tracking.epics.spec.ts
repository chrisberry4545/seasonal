import {
  initTrackingUser$, trackActionEpic$
} from './tracking.epics';
import * as helpers from '../../../helpers';
import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import {
  initSettings,
  ISettingsState,
  selectSeason,
  foodDetailsSelectSeason,
  openMenu,
  recipeItemClicked,
  foodItemClicked,
  setRegion,
  setCurrentFoodDetailsOnDietChange,
  setCurrentFoodDetailsSuccess,
  setDietType,
  showLocationPopup,
  showSearchBar,
  userRegionDetected,
  setError,
  toggleListView
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { goBackFromFoodDetails, goToAboutUsPage } from '../../route';
import { IHydratedFood, DIET_TYPE, IBackendError } from '@chrisb-dev/seasonal-shared-models';
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

describe('initTrackingUser$', () => {
  let mockSetTrackingUser: jest.SpyInstance;

  beforeEach(() => {
    mockSetTrackingUser = jest.spyOn(helpers, 'setTrackingUser');
    mockSetTrackingUser.mockClear();
  });

  describe('when the current userId is undefined', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectSettingsUserId')
        .mockReturnValue(undefined);
      await initTrackingUser$(
        of(initSettings({} as ISettingsState)) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('does not call setTrackingUser', () =>
      expect(mockSetTrackingUser).not.toHaveBeenCalled());
  });

  describe('when the current userId is defined', () => {
    const userId = 'userId';

    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectSettingsUserId')
        .mockReturnValue(userId);
      await initTrackingUser$(
        of(initSettings({} as ISettingsState)) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls setTrackingUser', () =>
      expect(mockSetTrackingUser).toHaveBeenCalledWith(userId));
  });

});

describe.each([
  selectSeason(1),
  foodDetailsSelectSeason(1),
  openMenu(),
  goBackFromFoodDetails(),
  goToAboutUsPage(),
  recipeItemClicked('1'),
  foodItemClicked('1'),
  setRegion('region'),
  setCurrentFoodDetailsOnDietChange(),
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
])('trackActionEpic$', (action) => {
  let mockTrackEvent: jest.SpyInstance;

  beforeEach(async () => {
    mockTrackEvent = jest.spyOn(helpers, 'trackEvent');
    mockTrackEvent.mockClear();
    await trackActionEpic$(
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
