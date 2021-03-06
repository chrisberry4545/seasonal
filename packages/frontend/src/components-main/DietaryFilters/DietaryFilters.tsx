import React, { FC } from 'react';

import './DietaryFilters.scss';

import {
  IDietaryFiltersProps
} from './DietaryFilters.interface';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { RadioButtonGroup } from '@chrisb-dev/seasonal-shared-frontend-components';

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
  <div className='c-dietary-filters' data-e2e='dietary-filters'>
    <RadioButtonGroup
      groupName='dietary-filter'
      radioButtons={radioButtons}
      selectedValue={dietType}
      onChange={(newValue) => update(newValue as DIET_TYPE)}
    />
  </div>
);
