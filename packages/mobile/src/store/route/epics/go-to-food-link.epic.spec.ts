import {
  foodItemClicked,
  badgeDetailsSelectFood,
  ISetCurrentFoodDetailsStart,
  setCurrentFoodDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToFoodLink$ } from './go-to-food-link.epic';

const foodId = 'foodId';

describe.each([
  foodItemClicked(foodId),
  badgeDetailsSelectFood(foodId)
])('goToFoodLink$', (action) => {
  let mockNavigate: jest.SpyInstance;
  let result: ISetCurrentFoodDetailsStart;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    result = await goToFoodLink$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the selected food item', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.FOOD_DETAILS, {
        id: foodId
      }
    ));

  test('returns setCurrentFoodDetailsStart', () =>
    expect(result).toEqual(setCurrentFoodDetailsStart(foodId)));
});
