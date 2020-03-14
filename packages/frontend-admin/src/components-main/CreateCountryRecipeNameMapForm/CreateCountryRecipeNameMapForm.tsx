import React, { FC } from 'react';
import { createCountryRecipeNameMap } from '../../services';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import {
  BaseFormCountryRecipeNameMap
} from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyCountryRecipeNameMapItem = (): ICountryRecipeNameMap => ({
  countryId: '',
  name: '',
  recipeId: ''
} as ICountryRecipeNameMap);

export const CreateCountryRecipeNameMapForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Country Recipe Name Map'>
    <BaseFormCountryRecipeNameMap
      items={createEmptyCountryRecipeNameMapItem()}
      updateMethod={createCountryRecipeNameMap}
      buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
