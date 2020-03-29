export const expectFoodDetailsImgToExist = () =>
  cy.get('[data-e2e="food-details-img"]').should('exist');
