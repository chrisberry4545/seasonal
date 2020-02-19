import React, { FC } from 'react';
import { createCountryRecipeNameMap } from '../../services';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import {
  BaseFormCountryRecipeNameMap
} from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';

const createEmptyCountryRecipeNameMapItem = (): ICountryRecipeNameMap => ({
  country: {
    id: ''
  },
  name: '',
  recipe: {
    id: ''
  }
} as ICountryRecipeNameMap);

export const CreateCountryRecipeNameMapForm: FC<{}> = () =>
  <BaseFormCountryRecipeNameMap
    items={createEmptyCountryRecipeNameMapItem()}
    updateMethod={createCountryRecipeNameMap} />;
