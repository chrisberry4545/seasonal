import React, { SFC } from 'react';

import './FoodDetailsTopSection.scss';

import {
  ArrowIcon,
  BareButton,
  TextHeadingMedium
} from '../../components-elements';

import {
  IFoodDetailsTopSectionProps
} from './FoodDetailsTopSection.interface';

export const FoodDetailsTopSection: SFC<IFoodDetailsTopSectionProps> = ({
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
