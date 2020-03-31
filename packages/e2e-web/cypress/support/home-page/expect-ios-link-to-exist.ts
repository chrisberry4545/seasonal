export const expectIOSLinkToExist = () =>
  cy.get('[data-e2e="ios-app-download"]')
    .should(
      'have.attr',
      'href',
      'https://apps.apple.com/us/app/eat-seasonal/id1496551124?ls=1'
    );
