import {
  foodItemClicked,
  ISetCurrentFoodDetailsStart,
  setCurrentFoodDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToFoodDetails$ } from './go-to-food-details.epic';

describe('goToFoodDetails$', () => {
  let result: ISetCurrentFoodDetailsStart;
  const foodId = 'foodId';

  beforeEach(async () => {
    result = await goToFoodDetails$(
      of(foodItemClicked(foodId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('returns setCurrentFoodDetailsStart', () =>
    expect(result).toEqual(setCurrentFoodDetailsStart(foodId)));
});
