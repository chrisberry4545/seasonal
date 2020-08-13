import { ComponentType } from 'react';

export interface IFoodAndRecipeTabsInputProps {
  foodScreen: ComponentType;
  recipeScreen: ComponentType;
  hasRecipes: boolean;
  foodTabLabel: string;
  recipeTabLabel: string;
}
