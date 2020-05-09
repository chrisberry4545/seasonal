import React, { FC } from 'react';

import './BadgesTopSection.scss';

import {
  IBadgesTopSectionProps
} from './BadgesTopSection.interface';
import { HeaderAndBackButton } from '../../components-layout';

export const BadgesTopSection: FC<IBadgesTopSectionProps> = ({
  badgeName,
  isLoading,
  onGoBack
}) => (
  !isLoading
    ? <div className='c-badges-top-section'>
      <HeaderAndBackButton
        onGoBack={onGoBack}
        title={badgeName}
      />
    </div>
  : null
);
