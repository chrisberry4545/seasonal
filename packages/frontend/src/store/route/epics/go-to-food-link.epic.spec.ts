import {
  foodItemClicked,
  badgeDetailsSelectFood
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { of } from 'rxjs';
import { FOOD_DETAILS_URL } from '../../../const';
import { goToFoodLink$ } from './go-to-food-link.epic';
import { Action } from 'redux';

const foodId = 'foodId';

describe.each([
  foodItemClicked(foodId),
  badgeDetailsSelectFood(foodId)
])('goToFoodLink$', (action) => {
  let result: Action;

  beforeEach(async () => {
    result = await goToFoodLink$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the food details', () =>
    expect(result).toEqual(push(
      `${FOOD_DETAILS_URL}/${foodId}`
    )));

});
