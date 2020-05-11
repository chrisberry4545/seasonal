export const clickFoodItem = () =>
  cy.get('[data-e2e="food-for-badge-grid"] [data-e2e="grid-item"]')
  .first().click();
