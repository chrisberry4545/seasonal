import { getRecipesGridItems } from './get-recipes-grid-items';

export const clickRecipesItem = () =>
  getRecipesGridItems().first().click();
