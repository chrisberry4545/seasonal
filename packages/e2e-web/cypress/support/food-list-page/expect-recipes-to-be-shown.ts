import { getRecipesGridItems } from './get-recipes-grid-items';

export const expectRecipesToBeShown = () =>
  getRecipesGridItems()
    .should('have.length.greaterThan', 0);
