export const expectToBeOnFoodListPage = () =>
  cy.location('hash').should('eq', '#/food');
