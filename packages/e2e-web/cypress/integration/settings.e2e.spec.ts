import { goToSettingsPage, clickRegion } from '../support/settings-page';
import { expectToBeOnFoodListPage } from '../support/food-list-page';
import { expectAllLoadingToBeComplete, reset } from '../support/general';

describe('Settings page', () => {
  beforeEach(() => {
    reset();
    goToSettingsPage();
    expectAllLoadingToBeComplete();
  });

  it('can change the users region', () => {
    clickRegion();
    expectToBeOnFoodListPage();
  });
});
