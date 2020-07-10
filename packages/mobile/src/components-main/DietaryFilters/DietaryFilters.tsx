import React, { FC } from 'react';

import {
  IDietaryFiltersProps
} from './DietaryFilters.interface';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { RadioButtonGroup } from '../../components-elements';
import { ViewStyle } from 'react-native';
import i18n from 'i18n-js';

const styleDietaryFilters: ViewStyle = {
  marginBottom: 12
};

export const DietaryFilters: FC<IDietaryFiltersProps> = ({
  dietType,
  update
}) => (
  <RadioButtonGroup
    style={styleDietaryFilters}
    radioButtons={[{
      label: i18n.t('dietFiltersAll'),
      value: DIET_TYPE.ALL
    }, {
      label: i18n.t('dietFiltersVegetarian'),
      value: DIET_TYPE.VEGETARIAN
    }, {
      label: i18n.t('dietFiltersVegan'),
      value: DIET_TYPE.VEGAN
    }]}
    selectedValue={dietType}
    onChange={(newValue) => update(newValue as DIET_TYPE)}
  />
);
