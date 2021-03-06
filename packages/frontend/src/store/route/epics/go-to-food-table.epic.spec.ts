import {
  foodDetailsSelectSeason,
  selectSeason
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { of } from 'rxjs';
import { FOOD_TABLE_URL } from '../../../const';
import { goToFoodTable$ } from './go-to-food-table.epic';

describe.each([
  foodDetailsSelectSeason(1),
  selectSeason(1)
])('goToFoodTable$', (action) => {
  let result: Action;

  beforeEach(async () => {
    result = await goToFoodTable$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to food table', () =>
    expect(result).toEqual(push(FOOD_TABLE_URL)));

});
