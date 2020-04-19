import {
  trackActionEpic$
} from './tracking.epics';
import { of } from 'rxjs';
import {
  selectSeason,
  foodDetailsSelectSeason,
  openMenu,
  recipeItemClicked,
  foodItemClicked,
  setError,
  closeMenu
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { goToWebVersion } from '../route';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { goToFoodTab, goToRecipesTab } from '../web-ui';
import * as helpers from '../../helpers/functions/get-analytics';

describe.each([
  selectSeason(1),
  foodDetailsSelectSeason(1),
  openMenu(),
  closeMenu(),
  goToFoodTab(),
  goToRecipesTab(),
  goToWebVersion(),
  recipeItemClicked('recipeId'),
  foodItemClicked('foodId'),
  setError({} as IBackendError)
])('trackActionEpic$', (action) => {
  let mockTrackEvent: jest.Mock;

  beforeEach(async () => {
    mockTrackEvent = jest.fn();
    jest.spyOn(helpers, 'getAnalytics')
      .mockReturnValue(mockTrackEvent as any);
    await trackActionEpic$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('tracks the event', () => {
    const { type } = action;
    expect(mockTrackEvent).toHaveBeenCalledWith(
      'send', 'event', type, type
    );
  });

});
