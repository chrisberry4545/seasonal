import React, { FC } from 'react';

import './FoodDetailsTopSection.scss';

import {
  IFoodDetailsTopSectionProps
} from './FoodDetailsTopSection.interface';
import { HeaderAndBackButton } from '../../components-layout';

export const FoodDetailsTopSection: FC<IFoodDetailsTopSectionProps> = ({
  foodImageUrl,
  foodName,
  isLoading,
  onGoBack
}) => (
  !isLoading
    ? <div className='c-food-details-top-section'>
      <HeaderAndBackButton
        onGoBack={onGoBack}
        title={foodName}
      />
      {
        foodImageUrl && <img src={foodImageUrl}
          alt={foodName}
          data-e2e='food-details-img'
          className='c-food-details-top-section__food-image'/>
      }
    </div>
  : null
);
