import { goToHomePage } from '../support/navigation';
import { clickGoToWebVersion } from '../support/home-page';

describe('Navigation', () => {
  it('Can go to food page', () => {
    goToHomePage();
    clickGoToWebVersion();
    cy.location('hash').should('eq', '#/food');
  });
});
