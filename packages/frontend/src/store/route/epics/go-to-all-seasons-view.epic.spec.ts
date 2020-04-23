import { goToAllSeasonsView } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { of } from 'rxjs';
import { ALL_SEASONS_URL } from '../../../const';
import { goToAllSeasonsView$ } from './go-to-all-seasons-view.epic';

describe('goToAllSeasonsView$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goToAllSeasonsView$(
      of(goToAllSeasonsView()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the all seasons view', () =>
    expect(result).toEqual(push(ALL_SEASONS_URL)));

});
