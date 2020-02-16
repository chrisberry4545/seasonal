import React, { FC } from 'react';
import { createRecipe } from '../../services';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { BaseFormRecipe } from '../BaseFormRecipe/BaseFormRecipe';

const createEmptyRecipeItem = (): IRecipe => ({
  imageUrlSmall: '',
  isVegan: false,
  isVegetarian: false,
  linkUrl: '',
  name: '',
  primaryFoodInRecipeIds: [] as string[],
  secondaryFoodInRecipeIds: [] as string[]
} as IRecipe);

export const CreateRecipeForm: FC<{}> = () =>
  <BaseFormRecipe items={createEmptyRecipeItem()} updateMethod={createRecipe} />;
