import {
  clickRecipesTab,
  goToFoodListPage,
  expectRecipesToBeShown,
  enterSearchValue,
  expectOnlyBeetrootRecipeToBeShown,
  getRecipesGridItems
} from '../support/food-list-page';
import {
  clickDietFiltersAll,
  clickDietFiltersVegan,
  clickDietFiltersVegetarian,
  expectAllLoadingToBeComplete
} from '../support/general';

describe('Recipes list', () => {
  beforeEach(() => {
    goToFoodListPage();
    expectAllLoadingToBeComplete();
    clickRecipesTab();
  });

  it('can see recipes', () => expectRecipesToBeShown());

  it('should let the user filter by vegan recipes', () => {
    getRecipesGridItems().then((els) => {
      clickDietFiltersVegan();
      getRecipesGridItems().should('have.length.lessThan', els.length);
    });
  });

  it('should let the user filter by vegatarian recipes', () => {
    getRecipesGridItems().then((els) => {
      clickDietFiltersVegetarian();
      getRecipesGridItems().should('have.length.lessThan', els.length);
    });
  });

  it('should let the user filter by all recipes', () => {
    getRecipesGridItems().then((els) => {
      clickDietFiltersVegan();
      clickDietFiltersAll();
      getRecipesGridItems().should('have.length', els.length);
    });
  });

  it('can search recipes', () => {
    enterSearchValue('Beetroot sauce');
    expectOnlyBeetrootRecipeToBeShown();
  });
});
