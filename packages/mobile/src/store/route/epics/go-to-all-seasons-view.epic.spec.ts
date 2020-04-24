import { goToAllSeasonsView } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToAllSeasonsView$ } from './go-to-all-seasons-view.epic';
import { goToAllSeasonsGetData } from '../route.actions';
import { Action } from 'redux';

describe('goToAllSeasonsView$', () => {
  let mockNavigate: jest.SpyInstance;
  let result: Action;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    result = await goToAllSeasonsView$(
      of(goToAllSeasonsView()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the all seasons page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.ALL_SEASONS
    ));

  test('returns goToAllSeasonsGetData', () =>
    expect(result).toEqual(goToAllSeasonsGetData()));
});
