import {
  goToWebVersion$
} from './go-to-web-version';
import { of } from 'rxjs';
import {
  FOOD_TABLE_URL
} from '../../../const';
import { goToWebVersion } from '../route.actions';
import { Action } from 'redux';
import { push } from 'connected-react-router';

describe('goToWebVersion$', () => {
  let result: Action;

  beforeEach(async () => {
    result = await goToWebVersion$(
      of(goToWebVersion()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns the route to the food table', () =>
    expect(result).toEqual(push(FOOD_TABLE_URL)));

});
