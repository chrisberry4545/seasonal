import React, { FC } from 'react';

import './LocationSelector.scss';

import { ILocationSelectorProps } from './LocationSelector.interface';
import { Select, ISelectOption } from '@chrisb-dev/seasonal-shared-frontend-components';

export const LocationSelector: FC<ILocationSelectorProps> = ({
  regions,
  selectedRegion,
  setRegion
}) => (
  <Select
    onChange={(regionId) => setRegion(regionId)}
    options={
      regions
        ? regions.reduce((options, region) => [
          ...options,
          {
            label: region.name,
            value: region.code
          }
        ], [] as ISelectOption[])
        : []
    }
    value={selectedRegion ? selectedRegion.code : ''}
  />
);
