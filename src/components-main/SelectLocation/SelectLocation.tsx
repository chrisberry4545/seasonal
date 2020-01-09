import React, { FC } from 'react';

import { ISelectLocationInputProps } from './SelectLocation.interface';
import { TopLoadingSpinner } from '../../components-layout';
import { SelectRegionConnecter } from '../SelectRegion/SelectRegion.connector';

export const SelectLocation: FC<ISelectLocationInputProps> = ({
  isLoading,
  children
}) => (
  isLoading
    ? <TopLoadingSpinner />
    : <SelectRegionConnecter>
      {children}
    </SelectRegionConnecter>
);
