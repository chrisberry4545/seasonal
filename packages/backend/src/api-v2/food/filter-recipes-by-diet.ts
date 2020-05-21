import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const filterRecipesByDiet = (
  recipes: IRecipe[] | undefined,
  isVegetarian?: boolean,
  isVegan?: boolean
): IRecipe[] | undefined => (
  recipes && recipes.filter((recipe) => {
    return isVegan ? recipe.isVegan
      : isVegetarian ? recipe.isVegetarian || recipe.isVegan
        : true;
  })
);
