import React, { FC } from 'react';

import './FoodBadges.scss';

import {
  IFoodBadgesProps
} from './FoodBadges.interface';
import { TextHeadingSmall, BareButton } from '@chrisb-dev/seasonal-shared-frontend-components';
import i18n from 'i18n-js';

export const FoodBadges: FC<IFoodBadgesProps> = ({
  badges,
  onBadgeClicked,
  isLoading
}) => (
  (!isLoading && badges && badges.length > 0)
    ? (
      <div className='c-food-badges'>
        <TextHeadingSmall className='c-food-badges__heading'>
          {i18n.t('foodBadgesTitle')}
        </TextHeadingSmall>
        <div className='c-food-badges__list'>
          {
            badges.map((badge) =>
              <BareButton
                data-e2e='food-badge'
                onClick={() => onBadgeClicked(badge.id)}
                className='c-food-badges__badge'
                key={badge.id}>
                {badge.name}
              </BareButton>
            )
          }
        </div>
      </div>
    ) : null
);
