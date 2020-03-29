import { getFoodGridItems } from './get-food-grid-items';

export const expectOnlyBeetrootToBeShown = () =>
  getFoodGridItems()
  .should('have.length', 1)
  .contains('Beetroot');
