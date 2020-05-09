import {
  foodItemClicked,
  badgeDetailsSelectFood,
  ISetCurrentFoodDetailsStart,
  setCurrentFoodDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { goToFoodDetails$ } from './go-to-food-details.epic';

const foodId = 'foodId';
describe.each([
  foodItemClicked(foodId),
  badgeDetailsSelectFood(foodId)
])('goToFoodDetails$', () => {
  let result: ISetCurrentFoodDetailsStart;

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
