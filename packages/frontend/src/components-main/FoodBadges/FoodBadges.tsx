import React, { FC } from 'react';

import './FoodBadges.scss';

import {
  IFoodBadgesInputProps
} from './FoodBadges.interface';
import { TextHeadingSmall } from '@chrisb-dev/seasonal-shared-frontend-components';

export const FoodBadges: FC<IFoodBadgesInputProps> = ({
  badges
}) => (
  (badges && badges.length > 0)
    ? (
      <div className='c-food-badges'>
        <TextHeadingSmall className='c-food-badges__heading'>
          Nutrition
        </TextHeadingSmall>
        <div className='c-food-badges__list'>
          {
            badges.map((badge) =>
              <div
                className='c-food-badges__badge'
                key={badge.id}>
                {badge.name}
              </div>
            )
          }
        </div>
      </div>
    ) : null
);
