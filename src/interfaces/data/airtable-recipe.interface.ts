import { IRecipe } from './recipe.interface';

export interface IAirtableRecipe extends IRecipe {
  primaryFood?: string[];
  secondaryFood?: string[];
}
