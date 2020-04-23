import { goToAllSeasonsView } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToAllSeasonsView$ } from './go-to-all-seasons-view.epic';

describe('goToAllSeasonsView$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToAllSeasonsView$(
      of(goToAllSeasonsView()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the all seasons page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.ALL_SEASONS
    ));
});
