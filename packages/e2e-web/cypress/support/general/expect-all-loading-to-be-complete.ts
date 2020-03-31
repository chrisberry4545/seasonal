export const expectAllLoadingToBeComplete = () =>
  cy.wait(100)
    .get('[data-e2e="loading-spinner"]', { timeout: 20000 })
    .should('not.be.visible')
    .wait(100);
