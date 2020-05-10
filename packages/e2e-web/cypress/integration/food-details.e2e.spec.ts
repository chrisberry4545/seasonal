import {
  clickFoodDetailsSeason,
  clickGoBackButton,
  expectFoodDetailsImgToExist,
  expectToBeOnFoodDetailsPage,
  clickFoodDetailsRecipe,
  goToFoodDetailsPage,
  expectFoodDetailsOnlyBeetrootRecipeToBeShown,
  getFoodDetailsRecipeGridItems
} from '../support/food-details-page';
import {
  expectToBeOnFoodListPage, enterSearchValue, goToFoodListPage, clickFoodItem
} from '../support/food-list-page';
import {
  clickDietFiltersAll,
  clickDietFiltersVegan,
  clickDietFiltersVegetarian,
  expectAllLoadingToBeComplete,
  reset
} from '../support/general';

describe('Food details', () => {
  beforeEach(() => {
    reset();
    goToFoodDetailsPage();
    expectAllLoadingToBeComplete();
  });

  it('can go to food details page', () => expectToBeOnFoodDetailsPage());

  it('the back button works', () => {
    goToFoodListPage();
    clickFoodItem();
    expectAllLoadingToBeComplete();
    clickGoBackButton();
    expectToBeOnFoodListPage();
  });

  it('displays an image', () => expectFoodDetailsImgToExist());

  it('should let the user filter by vegan recipes', () => {
    getFoodDetailsRecipeGridItems().then((els) => {
      clickDietFiltersVegan();
      getFoodDetailsRecipeGridItems().should('have.length.lessThan', els.length);
    });
  });

  it('should let the user filter by vegatarian recipes', () => {
    getFoodDetailsRecipeGridItems().then((els) => {
      clickDietFiltersVegetarian();
      getFoodDetailsRecipeGridItems().should('have.length.lessThan', els.length);
    });
  });

  it('should let the user filter by all recipes', () => {
    getFoodDetailsRecipeGridItems().then((els) => {
      clickDietFiltersVegan();
      clickDietFiltersAll();
      getFoodDetailsRecipeGridItems().should('have.length', els.length);
    });
  });

  it('can filter recipes with the search', () => {
    enterSearchValue('Beetroot sauce');
    expectFoodDetailsOnlyBeetrootRecipeToBeShown();
  });

  it('can click on a recipe', () => clickFoodDetailsRecipe());

  it('seasons in the season table can be clicked', () => {
    clickFoodDetailsSeason();
    expectToBeOnFoodListPage();
  });

});
