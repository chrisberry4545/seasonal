import React, { FC } from 'react';
import { createFood } from '../../services';
import { BaseFormFood } from '../BaseFormFood/BaseFormFood';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyFoodItem = (): IFood => ({
  description: '',
  imageUrlSmall: '',
  name: '',
  substituteFoodIds: [] as string[]
} as IFood);

export const CreateFoodForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Food'>
    <BaseFormFood items={createEmptyFoodItem()}
      updateMethod={createFood}
      buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
