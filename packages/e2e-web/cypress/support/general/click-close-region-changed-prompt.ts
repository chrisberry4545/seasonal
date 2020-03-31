export const clickCloseRegionChangePrompt = () =>
  cy.get(
    '[data-e2e="region-changed-prompt"]'
    + ' [data-e2e="modal-close-btn"]'
  )
  .should('be.visible')
  .click();
