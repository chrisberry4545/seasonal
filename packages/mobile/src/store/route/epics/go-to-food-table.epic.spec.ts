import { foodDetailsSelectSeason, selectSeason } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../../const';
import * as helpers from '../../../helpers';
import { goToFoodTable$ } from './go-to-food-table.epic';

describe.each([
  selectSeason(1),
  foodDetailsSelectSeason(1)
])('goToFoodTable$', (action) => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToFoodTable$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the season details page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.SEASON_DETAILS
    ));
});
