import React, { FC } from 'react';
import { createFood } from '../../services';
import { BaseFormFood } from '../BaseFormFood/BaseFormFood';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { FORM_BUTTON_TEXT } from '../../consts';

const createEmptyFoodItem = (): IFood => ({
  description: '',
  imageUrlSmall: '',
  name: '',
  substituteFoodIds: [] as string[]
} as IFood);

export const CreateFoodForm: FC<{}> = () =>
  <BaseFormFood items={createEmptyFoodItem()}
    updateMethod={createFood}
    buttonText={FORM_BUTTON_TEXT.CREATE} />;
