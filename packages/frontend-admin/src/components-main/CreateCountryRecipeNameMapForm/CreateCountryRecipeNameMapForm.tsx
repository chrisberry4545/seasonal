import React, { FC } from 'react';
import { createCountryRecipeNameMap } from '../../services';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import {
  BaseFormCountryRecipeNameMap
} from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';
import { FORM_BUTTON_TEXT } from '../../consts';

const createEmptyCountryRecipeNameMapItem = (): ICountryRecipeNameMap => ({
  countryId: '',
  name: '',
  recipeId: ''
} as ICountryRecipeNameMap);

export const CreateCountryRecipeNameMapForm: FC<{}> = () =>
  <BaseFormCountryRecipeNameMap
    items={createEmptyCountryRecipeNameMapItem()}
    updateMethod={createCountryRecipeNameMap}
    buttonText={FORM_BUTTON_TEXT.CREATE} />;
