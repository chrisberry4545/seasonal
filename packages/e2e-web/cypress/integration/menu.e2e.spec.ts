import {
  goToFoodListPage,
  expectToBeOnFoodListPage
} from '../support/food-list-page';
import {
  clickMenuSeasonJan,
  clickMenuAllSeasons,
  clickMenuSeasonFeb,
  clickMenuSettings
} from '../support/menu';
import { expectToBeOnAllSeasonsPage } from '../support/all-seasons-page';
import { expectToBeOnSettingsPage } from '../support/settings-page';
import { expectAllLoadingToBeComplete, reset } from '../support/general';

describe('Menu', () => {
  beforeEach(() => {
    reset();
    goToFoodListPage();
    expectAllLoadingToBeComplete();
  });

  it('can switch seasons via the menu', () => {
    clickMenuSeasonJan();
    expectToBeOnFoodListPage();
    clickMenuSeasonFeb();
    expectToBeOnFoodListPage();
  });

  it('can go to all seasons view', () => {
    clickMenuAllSeasons();
    expectToBeOnAllSeasonsPage();
  });

  it('can go to the settings page', () => {
    clickMenuSettings();
    expectToBeOnSettingsPage();
  });
});
