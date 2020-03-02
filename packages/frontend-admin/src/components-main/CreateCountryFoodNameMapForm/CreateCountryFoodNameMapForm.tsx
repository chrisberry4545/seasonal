import React, { FC } from 'react';
import { createCountryFoodNameMap } from '../../services';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import {
  BaseFormCountryFoodNameMap
} from '../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap';
import { FORM_BUTTON_TEXT } from '../../consts';

const createEmptyCountryFoodNameMapItem = (): ICountryFoodNameMap => ({
  countryId: '',
  foodId: '',
  name: ''
} as ICountryFoodNameMap);

export const CreateCountryFoodNameMapForm: FC<{}> = () =>
  <BaseFormCountryFoodNameMap
    items={createEmptyCountryFoodNameMapItem()}
    updateMethod={createCountryFoodNameMap}
    buttonText={FORM_BUTTON_TEXT.CREATE} />;
