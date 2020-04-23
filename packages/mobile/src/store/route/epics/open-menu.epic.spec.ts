import { openMenu } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { openMenu$ } from './open-menu.epic';

describe('openMenu$', () => {
  let mockOpenDrawer: jest.SpyInstance;

  beforeEach(async () => {
    mockOpenDrawer = jest.spyOn(helpers, 'openDrawer');
    mockOpenDrawer.mockClear();
    await openMenu$(
      of(openMenu()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('opens the nav drawer', () =>
    expect(mockOpenDrawer).toHaveBeenCalled());
});
