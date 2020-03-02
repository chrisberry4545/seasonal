import React, { FC } from 'react';
import { createRecipe } from '../../services';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { BaseFormRecipe } from '../BaseFormRecipe/BaseFormRecipe';
import { FORM_BUTTON_TEXT } from '../../consts';

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
  <BaseFormRecipe items={createEmptyRecipeItem()}
    updateMethod={createRecipe}
    buttonText={FORM_BUTTON_TEXT.CREATE} />;
