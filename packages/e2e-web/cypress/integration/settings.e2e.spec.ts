import { goToSettingsPage, clickRegion } from '../support/settings-page';
import { expectToBeOnFoodListPage, goToFoodListPage } from '../support/food-list-page';
import { expectAllLoadingToBeComplete, reset } from '../support/general';
import { clickMenuSettings } from '../support/menu';

describe('Settings page', () => {
  beforeEach(() => {
    reset();
    goToSettingsPage();
    expectAllLoadingToBeComplete();
  });

  it('can change the users region', () => {
    goToFoodListPage();
    clickMenuSettings();
    clickRegion();
    expectToBeOnFoodListPage();
  });
});
