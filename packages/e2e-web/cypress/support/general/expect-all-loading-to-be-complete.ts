export const expectAllLoadingToBeComplete = () =>
  cy.get('[data-e2e="loading-spinner"]', { timeout: 20000 })
    .should('to.not.exist');
