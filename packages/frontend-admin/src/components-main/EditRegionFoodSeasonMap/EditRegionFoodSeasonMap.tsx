import React, { FC, useState } from 'react';
import { BaseFormRegionFoodSeasonMap } from '../BaseFormRegionFoodSeasonMap/BaseFormRegionFoodSeasonMap';
import { BaseFormRegionSeasonFoodMap } from '../BaseFormRegionSeasonFoodMap/BaseFormRegionSeasonFoodMap';
import { BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import './EditRegionFoodSeasonMap.scss';

export const EditRegionFoodSeasonMap: FC = () => {
  const [isInFoodFirstMode, setIsInFoodFirstMode] = useState(true);

  const flipForm = () => setIsInFoodFirstMode(!isInFoodFirstMode);

  return (
    <div>
      <BareButton
        className='c-edit-region-food-season-map__flip-btn'
        onClick={flipForm}>
          {isInFoodFirstMode ? 'Select by season' : 'Select by food'}
        </BareButton>
      {
        isInFoodFirstMode
          ? <BaseFormRegionFoodSeasonMap />
          : <BaseFormRegionSeasonFoodMap />
      }
    </div>
  );
};
