export const expectAboutSectionToExist = () =>
  cy.get('[data-e2e="about-section"]').should('exist');
