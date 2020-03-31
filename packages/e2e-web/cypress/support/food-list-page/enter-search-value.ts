export const enterSearchValue = (value: string) =>
  cy.get('[data-e2e="search-bar"]').type(value);
