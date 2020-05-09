import React, { FC } from 'react';

import './FoodForBadge.scss';

import { IFoodForBadgeProps } from './FoodForBadge.interface';
import { ImageGrid } from '../../components-layout';
import {
  TextHeadingSmall
} from '@chrisb-dev/seasonal-shared-frontend-components';

export const FoodForBadge: FC<IFoodForBadgeProps> = ({
  isLoading,
  currentBadgeFood,
  onFoodSelected
}) => (
  !isLoading
    ? <div className='c-food-for-badge'>
      <TextHeadingSmall className='c-food-for-badge__heading'>
        Found in
      </TextHeadingSmall>
      <ImageGrid data-e2e='food-for-badge-grid'
        data={currentBadgeFood} onClick={onFoodSelected} />
    </div>
    : null
);
