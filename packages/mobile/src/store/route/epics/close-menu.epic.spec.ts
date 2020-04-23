import { closeMenu, selectSeason } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { goToAboutUsPage } from '../route.actions';
import { closeMenu$ } from './close-menu.epic';

describe.each([
  goToAboutUsPage(),
  selectSeason(1),
  closeMenu()
])('closeMenu$', (action) => {
  let mockCloseDrawer: jest.SpyInstance;

  beforeEach(async () => {
    mockCloseDrawer = jest.spyOn(helpers, 'closeDrawer');
    mockCloseDrawer.mockClear();
    await closeMenu$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('closes the nav drawer', () =>
    expect(mockCloseDrawer).toHaveBeenCalled());
});
