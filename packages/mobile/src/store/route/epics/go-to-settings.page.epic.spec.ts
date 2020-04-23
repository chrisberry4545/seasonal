import { goToSettingsPage } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToSettingsPage$ } from './go-to-settings.page.epic';

describe('goToSettingsPage$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToSettingsPage$(
      of(goToSettingsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the settings page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.SETTINGS
    ));
});
