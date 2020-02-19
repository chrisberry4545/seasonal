import React, { FC } from 'react';
import { createCountryFoodNameMap } from '../../services';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import {
  BaseFormCountryFoodNameMap
} from '../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap';

const createEmptyCountryFoodNameMapItem = (): ICountryFoodNameMap => ({
  countryId: '',
  foodId: '',
  name: ''
} as ICountryFoodNameMap);

export const CreateCountryFoodNameMapForm: FC<{}> = () =>
  <BaseFormCountryFoodNameMap
    items={createEmptyCountryFoodNameMapItem()}
    updateMethod={createCountryFoodNameMap} />;
