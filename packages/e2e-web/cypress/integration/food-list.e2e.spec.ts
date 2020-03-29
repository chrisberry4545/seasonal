import {
  clickFoodItem,
  goToFoodListPage,
  enterSearchValue,
  expectOnlyBeetrootToBeShown
} from '../support/food-list-page';
import { expectToBeOnFoodDetailsPage } from '../support/food-details-page';
import { expectAllLoadingToBeComplete } from '../support/general';
import { clickMenuSeasonFeb } from '../support/menu';

describe('Food list', () => {
  beforeEach(() => {
    goToFoodListPage();
    clickMenuSeasonFeb();
    expectAllLoadingToBeComplete();
  });

  it('can click on food items', () => {
    clickFoodItem();
    expectToBeOnFoodDetailsPage();
  });

  it('can search food', () => {
    enterSearchValue('Beetr');
    expectOnlyBeetrootToBeShown();
  });
});
