import {
  badgeItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { of } from 'rxjs';
import { BADGE_DETAILS_URL } from '../../../const';
import { goToBadgeLink$ } from './go-to-badge-link.epic';
import { Action } from 'redux';

describe('goToFoodLink$', () => {
  let result: Action;
  const badgeId = 'badgeId';

  beforeEach(async () => {
    result = await goToBadgeLink$(
      of(badgeItemClicked(badgeId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the food details', () =>
    expect(result).toEqual(push(
      `${BADGE_DETAILS_URL}/${badgeId}`
    )));

});
