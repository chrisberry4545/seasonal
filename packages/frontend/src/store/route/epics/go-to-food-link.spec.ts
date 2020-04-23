import { foodItemClicked, ISetCurrentFoodDetailsStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { of } from 'rxjs';
import { FOOD_DETAILS_URL } from '../../../const';
import { goToFoodLink$ } from './go-to-food-link';

describe('goToFoodLink$', () => {
  let result: ISetCurrentFoodDetailsStart;
  const foodId = 'foodId';

  beforeEach(async () => {
    result = await goToFoodLink$(
      of(foodItemClicked(foodId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns an action to route to the food details', () =>
    expect(result).toEqual(push(
      `${FOOD_DETAILS_URL}/${foodId}`
    )));

});
