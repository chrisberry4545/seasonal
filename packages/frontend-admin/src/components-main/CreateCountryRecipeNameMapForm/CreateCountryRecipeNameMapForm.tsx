import React, { FC } from 'react';
import { createCountryRecipeNameMap } from '../../services';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import {
  BaseFormCountryRecipeNameMap
} from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';

const createEmptyCountryRecipeNameMapItem = (): ICountryRecipeNameMap => ({
  countryId: '',
  name: '',
  recipeId: ''
} as ICountryRecipeNameMap);

export const CreateCountryRecipeNameMapForm: FC<{}> = () =>
  <BaseFormCountryRecipeNameMap
    items={createEmptyCountryRecipeNameMapItem()}
    updateMethod={createCountryRecipeNameMap} />;
