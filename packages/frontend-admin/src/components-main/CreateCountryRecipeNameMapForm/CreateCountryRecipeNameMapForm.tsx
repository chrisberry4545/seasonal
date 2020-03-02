import React, { FC } from 'react';
import { createCountryRecipeNameMap } from '../../services';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import {
  BaseFormCountryRecipeNameMap
} from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';
import { FORM_BUTTON_TEXT } from '../../consts';
import { FormLayout } from '../../components-layouts';

const createEmptyCountryRecipeNameMapItem = (): ICountryRecipeNameMap => ({
  countryId: '',
  name: '',
  recipeId: ''
} as ICountryRecipeNameMap);

export const CreateCountryRecipeNameMapForm: FC<{}> = () =>
  <FormLayout title='Create Country Recipe Name Map'>
    <BaseFormCountryRecipeNameMap
      items={createEmptyCountryRecipeNameMapItem()}
      updateMethod={createCountryRecipeNameMap}
      buttonText={FORM_BUTTON_TEXT.CREATE} />
  </FormLayout>;
