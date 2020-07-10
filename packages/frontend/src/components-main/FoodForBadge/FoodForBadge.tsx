import React, { FC } from 'react';
import './FoodForBadge.scss';
import { IFoodForBadgeProps } from './FoodForBadge.interface';
import { ImageGrid } from '../../components-layout';
import {
  TextMedium
} from '@chrisb-dev/seasonal-shared-frontend-components';
import i18n from 'i18n-js';

export const FoodForBadge: FC<IFoodForBadgeProps> = ({
  isLoading,
  currentBadgeFood,
  onFoodSelected
}) => (
  !isLoading
    ? <div className='c-food-for-badge'>
      <TextMedium className='c-food-for-badge__heading'>
        {i18n.t('foodForBadgeFoundIn')}
      </TextMedium>
      <ImageGrid data-e2e='food-for-badge-grid'
        data={currentBadgeFood} onClick={onFoodSelected} />
    </div>
    : null
);
