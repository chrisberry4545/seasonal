import { goBackFromSettingsPage, setRegion } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { goBackFromFoodDetails, goBackFromBadgeDetails } from '../route.actions';
import { goBack$ } from './go-back.epic';

describe.each([
  setRegion('regionId'),
  goBackFromFoodDetails(),
  goBackFromSettingsPage(),
  goBackFromBadgeDetails()
])('goBack$', (action) => {
  let mockNavigateBackOne: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigateBackOne = jest.spyOn(helpers, 'navigateBackOne');
    mockNavigateBackOne.mockClear();
    await goBack$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates back one page', () =>
    expect(mockNavigateBackOne).toHaveBeenCalled());
});
