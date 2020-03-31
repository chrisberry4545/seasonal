import {
  clickFoodItem,
  goToFoodListPage,
  enterSearchValue,
  expectOnlyBeetrootToBeShown
} from '../support/food-list-page';
import { expectToBeOnFoodDetailsPage } from '../support/food-details-page';
import { expectAllLoadingToBeComplete, reset } from '../support/general';
import { clickMenuSeasonJan } from '../support/menu';

describe('Food list', () => {
  beforeEach(() => {
    reset();
    goToFoodListPage();
    expectAllLoadingToBeComplete();
    clickMenuSeasonJan();
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
