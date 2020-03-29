export const expectMenuToBeVisible = () =>
  cy.get('[data-e2e="c-season-menu "]').should('exist');
