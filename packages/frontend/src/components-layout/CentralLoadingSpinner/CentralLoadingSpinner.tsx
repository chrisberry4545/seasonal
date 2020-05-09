import React, { FC } from 'react';

import './CentralLoadingSpinner.scss';

import {
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  ICentralLoadingSpinner
} from './CentralLoadingSpinner.interface';

export const CentralLoadingSpinner: FC<ICentralLoadingSpinner> = ({
  isLoading
}) => (
  isLoading
    ? <div className='c-central-loading-spinner'>
      <LoadingSpinner />
    </div>
    : null
);
