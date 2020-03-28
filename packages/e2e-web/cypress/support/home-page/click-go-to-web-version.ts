export const clickGoToWebVersion = () =>
  cy.get('[data-e2e="view-web-version"]')
    .first().click();
