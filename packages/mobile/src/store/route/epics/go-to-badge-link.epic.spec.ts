import {
  setCurrentBadgeDetailsStart,
  badgeItemClicked,
  ISetCurrentFoodDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToBadgeLink$ } from './go-to-badge-link.epic';

describe('goToBadgeLink$', () => {
  let mockNavigate: jest.SpyInstance;
  let result: ISetCurrentFoodDetailsStart;
  const badgeId = 'badgeId';

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    result = await goToBadgeLink$(
      of(badgeItemClicked(badgeId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the selected food item', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.BADGE_DETAILS, {
        id: badgeId
      }
    ));

  test('returns setCurrentBadgeDetailsStart', () =>
    expect(result).toEqual(setCurrentBadgeDetailsStart(badgeId)));

});
