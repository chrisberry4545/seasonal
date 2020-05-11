export const expectFoodForBadgeToExist = () =>
  cy.get('[data-e2e="food-for-badge-grid"]').should('exist');
