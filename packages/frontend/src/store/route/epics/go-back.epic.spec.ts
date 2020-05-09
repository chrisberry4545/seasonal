import { goBackFromBadgeDetails } from '../route.actions';
import { Action } from 'redux';
import { of } from 'rxjs';
import { goBack$ } from './go-back.epic';
import { goBack } from 'connected-react-router';

describe('goBack$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goBack$(
      of(goBackFromBadgeDetails()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('goes back', () => expect(result).toEqual(goBack()));

});
