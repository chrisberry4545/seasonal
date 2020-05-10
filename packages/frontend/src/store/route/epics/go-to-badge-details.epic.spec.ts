import {
  ISetCurrentBadgeDetailsStart,
  setCurrentBadgeDetailsStart,
  initApp
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToBadgeDetails$ } from './go-to-badge-details.epic';
import * as routeSelectors from '../route.selectors';

describe('goToBadgeDetails$', () => {
  let result: ISetCurrentBadgeDetailsStart | undefined;
  const badgeId = 'badgeId';

  beforeEach(() => result = undefined);

  describe('when the current route is badge details and has an id', () => {

    beforeEach(async () => {
      jest.spyOn(routeSelectors, 'selectCurrentBadgeDetailsId')
        .mockReturnValue(badgeId);
      result = await goToBadgeDetails$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns setCurrentBadgeDetailsStart', () =>
      expect(result).toEqual(setCurrentBadgeDetailsStart(badgeId)));

  });

  describe('when the current route is badge details but has no id', () => {

    beforeEach(async () => {
      jest.spyOn(routeSelectors, 'selectCurrentBadgeDetailsId')
        .mockReturnValue(null);
      result = await goToBadgeDetails$(
        of(initApp()) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns setCurrentBadgeDetailsStart', () =>
      expect(result).toBeUndefined());

  });

});
