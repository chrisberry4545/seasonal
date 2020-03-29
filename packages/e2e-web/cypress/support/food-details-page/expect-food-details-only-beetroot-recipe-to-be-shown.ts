import { getFoodDetailsRecipeGridItems } from './get-food-details-recipe-grid-items';

export const expectFoodDetailsOnlyBeetrootRecipeToBeShown = () =>
  getFoodDetailsRecipeGridItems()
  .should('have.length', 1)
  .contains('Pasta with a Beetroot sauce');
