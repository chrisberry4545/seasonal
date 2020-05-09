import {
  badgeItemClicked,
  ISetCurrentBadgeDetailsStart,
  setCurrentBadgeDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToBadgeDetails$ } from './go-to-badge-details.epic';

describe('goToBadgeDetails$', () => {
  let result: ISetCurrentBadgeDetailsStart;
  const badgeId = 'foodId';

  beforeEach(async () => {
    result = await goToBadgeDetails$(
      of(badgeItemClicked(badgeId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns setCurrentBadgeDetailsStart', () =>
    expect(result).toEqual(setCurrentBadgeDetailsStart(badgeId)));
});
