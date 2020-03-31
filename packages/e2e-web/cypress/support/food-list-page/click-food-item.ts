import { getFoodGridItems } from './get-food-grid-items';

export const clickFoodItem = () =>
  getFoodGridItems().first().click();
