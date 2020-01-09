import React, { FC } from 'react';

import {
  IDietaryFiltersProps
} from './DietaryFilters.interface';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared';
import { RadioButtonGroup } from '../../components-elements';
import { ViewStyle } from 'react-native';

const styleDietaryFilters: ViewStyle = {
  marginBottom: 12
};

const radioButtons = [{
  label: 'All',
  value: DIET_TYPE.ALL
}, {
  label: 'Vegetarian',
  value: DIET_TYPE.VEGETARIAN
}, {
  label: 'Vegan',
  value: DIET_TYPE.VEGAN
}];

export const DietaryFilters: FC<IDietaryFiltersProps> = ({
  dietType,
  update
}) => (
  <RadioButtonGroup
    style={styleDietaryFilters}
    radioButtons={radioButtons}
    selectedValue={dietType}
    onChange={(newValue) => update(newValue as DIET_TYPE)}
  />
);
