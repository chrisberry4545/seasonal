export const expectWhyEatSeasonalSectionToExist = () =>
  cy.get('[data-e2e="why-eat-seasonal-section"]')
    .should('exist');
