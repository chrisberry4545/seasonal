export const clickFoodDetailsRecipe = () =>
  cy.get('[data-e2e="recipes-for-food-grid"] [data-e2e="grid-item"]')
    .first().click();
