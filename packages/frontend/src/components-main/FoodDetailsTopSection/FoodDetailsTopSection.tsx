import React, { FC } from 'react';

import './FoodDetailsTopSection.scss';

import {
  ArrowIcon,
  BareButton,
  TextHeadingMedium
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  IFoodDetailsTopSectionProps
} from './FoodDetailsTopSection.interface';

export const FoodDetailsTopSection: FC<IFoodDetailsTopSectionProps> = ({
  foodImageUrl,
  foodName,
  isLoading,
  onGoBack
}) => (
  !isLoading
    ? <div className='c-food-details-top-section'>
    <div className='c-food-details-top-section__top-bar'>
      <BareButton
        className='c-food-details-top-section__back-button'
        onClick={onGoBack}>
        <ArrowIcon />
      </BareButton>
      <TextHeadingMedium className='c-food-details-top-section__food-name'>
        {foodName}
      </TextHeadingMedium>
    </div>
    {
      foodImageUrl && <img src={foodImageUrl}
        className='c-food-details-top-section__food-image'/>
    }
  </div>
  : null
);
