import React, { FC } from 'react';
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
    ? <HeaderAndBackButton
        onGoBack={onGoBack}
        title={badgeName}
      />
  : null
);
