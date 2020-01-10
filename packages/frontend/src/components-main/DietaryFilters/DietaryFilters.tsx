import React, { FC } from 'react';

import './DietaryFilters.scss';

import {
  IDietaryFiltersProps
} from './DietaryFilters.interface';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared';
import { RadioButtonGroup } from '../../components-elements';

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
  <div className='c-dietary-filters'>
    <RadioButtonGroup
      groupName='dietary-filter'
      radioButtons={radioButtons}
      selectedValue={dietType}
      onChange={(newValue) => update(newValue as DIET_TYPE)}
    />
  </div>
);
