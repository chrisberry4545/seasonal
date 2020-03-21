import React, { FC } from 'react';

import { ILocationSelectorProps } from './LocationSelector.interface';
import { GroupedSelectBox } from '../../components-elements';

export const LocationSelector: FC<ILocationSelectorProps> = ({
  countryAndRegionSelectGroup,
  setRegion
}) => (
  <GroupedSelectBox
    groups={countryAndRegionSelectGroup}
    onSelected={setRegion} />
);
