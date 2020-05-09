import { goBackFromBadgeDetails, goBackFromFoodDetails } from '../route.actions';
import { Action } from 'redux';
import { of } from 'rxjs';
import { goBack$ } from './go-back.epic';
import { goBack } from 'connected-react-router';
import { setRegion, goBackFromSettingsPage } from '@chrisb-dev/seasonal-shared-frontend-redux';

describe.each([
  goBackFromBadgeDetails(),
  setRegion('regionId'),
  goBackFromSettingsPage(),
  goBackFromFoodDetails()
])('goBack$', (action) => {
  let result: Action;

  beforeEach(async () => {
    result = await goBack$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('goes back', () => expect(result).toEqual(goBack()));

});
