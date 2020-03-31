import { getRecipesGridItems } from './get-recipes-grid-items';

export const expectOnlyBeetrootRecipeToBeShown = () =>
  getRecipesGridItems()
  .should('have.length', 1)
  .contains('Pasta with a Beetroot sauce');
