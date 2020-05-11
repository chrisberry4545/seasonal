import {
  expectToBeOnFoodDetailsPage,
  goToFoodDetailsPage,
  clickFoodBadge
} from '../support/food-details-page';
import {
  clickGoBackButton,
  expectAllLoadingToBeComplete,
  reset
} from '../support/general';
import {
  clickFoodItem,
  expectToBeOnBadgePage,
  goToBadgePage,
  expectFoodForBadgeToExist
} from '../support/badge-page';

describe('Badge page', () => {
  beforeEach(() => {
    reset();
    goToBadgePage();
  });

  it('can go to badge page', () => expectToBeOnBadgePage());

  it('the back button works', () => {
    goToFoodDetailsPage();
    expectAllLoadingToBeComplete();
    clickFoodBadge();
    clickGoBackButton();
  });

  it('shows the food for badges', () => expectFoodForBadgeToExist());

  it('can click food items', () => {
    clickFoodItem();
    expectToBeOnFoodDetailsPage();
  });

});
