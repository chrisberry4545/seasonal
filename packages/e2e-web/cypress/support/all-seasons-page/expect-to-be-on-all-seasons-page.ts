export const expectToBeOnAllSeasonsPage = () =>
  cy.location('hash').should('contain', '#/all-seasons');
