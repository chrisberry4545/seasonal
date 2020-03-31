export const clickRegion = () =>
  cy.get(
    '[data-e2e="location-selector"]'
    + ' [data-e2e="select-option-USA"]'
  ).click();
