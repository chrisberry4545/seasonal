export const expectToBeOnBadgePage = () =>
  cy.location('hash').should('contain', '#/badge/');
