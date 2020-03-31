export const expectToBeOnFoodDetailsPage = () =>
  cy.location('hash').should('contain', '#/food-details/');
