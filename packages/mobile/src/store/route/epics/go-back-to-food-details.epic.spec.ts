import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { goBackFromBadgeDetails } from '../route.actions';
import { goBackToFoodDetails$ } from './go-back-to-food-details.epic';
import { ROUTES } from '../../../const';

describe('goBackToFoodDetails$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goBackToFoodDetails$(
      of(goBackFromBadgeDetails()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates back one page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.FOOD_DETAILS));

});
