import { goToSettingsPage, showLocationPopup } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { of } from 'rxjs';
import { SETTINGS_URL } from '../../../const';
import { goToSettingsPage$ } from './go-to-settings-page';

describe.each([
  goToSettingsPage(),
  showLocationPopup()
])('goToSettingsPage$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goToSettingsPage$(
      of(goToSettingsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the settings url', () =>
    expect(result).toEqual(push(SETTINGS_URL)));

});
