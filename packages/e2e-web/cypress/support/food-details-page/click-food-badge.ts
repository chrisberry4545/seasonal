export const clickFoodBadge = () =>
  cy.get('[data-e2e="food-badge"]')
  .first().click();
