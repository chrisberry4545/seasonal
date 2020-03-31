export const expectToBeOnSettingsPage = () =>
  cy.location('hash').should('eq', '#/settings');
