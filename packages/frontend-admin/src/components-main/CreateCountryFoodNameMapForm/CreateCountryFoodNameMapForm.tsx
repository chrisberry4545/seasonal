import React, { FC } from 'react';
import { createCountryFoodNameMap } from '../../services';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared-models';
import {
  BaseFormCountryFoodNameMap
} from '../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyCountryFoodNameMapItem = (): ICountryFoodNameMap => ({
  countryId: '',
  foodId: '',
  name: ''
} as ICountryFoodNameMap);

export const CreateCountryFoodNameMapForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Country Food Name Map'>
    <BaseFormCountryFoodNameMap
        items={createEmptyCountryFoodNameMapItem()}
        updateMethod={createCountryFoodNameMap}
        buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
