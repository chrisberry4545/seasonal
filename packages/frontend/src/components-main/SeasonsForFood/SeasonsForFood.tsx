import React, { Fragment, FC } from 'react';

import './SeasonsForFood.scss';

import {
  TextMedium,
  TextSmall,
  BareButton,
  TextHeadingSmall
} from '@chrisb-dev/seasonal-shared-frontend-components';

import { ISeasonForFoodProps } from './SeasonsForFood.interface';

export const SeasonsForFood: FC<ISeasonForFoodProps> = ({
  isLoading,
  seasonsSelectedForFood,
  onSeasonSelected
}) => (
  !isLoading
    ? <Fragment>
    <TextHeadingSmall
      className='c-season-for-food__list-heading'>
      When are they in season?
    </TextHeadingSmall>
    <div className='c-season-for-food__list'>
      {
        seasonsSelectedForFood && seasonsSelectedForFood.map((
          {
            isSelected,
            name
          },
          seasonIndex
        ) => (
          <BareButton
            e2eTag='season-for-food-btn'
            key={name}
            className={
              `c-season-for-food__season` +
                (
                  isSelected
                    ? ` c-season-for-food__season--selected`
                    : ''
                )
              }
            onClick={ () => onSeasonSelected(seasonIndex) }>
            <TextMedium>
              { name.substring(0, 3) }
            </TextMedium>
          </BareButton>
        ))
      }
    </div>
    <div
      className={`c-season-food__in-season-key ` +
        `c-season-food__in-season-key--in-season`
      }>
      <TextSmall className='c-season-food__in-season-key__text'>
        In season
      </TextSmall>
    </div>
    <div
      className='c-season-food__in-season-key'>
      <TextSmall className='c-season-food__in-season-key__text'>
        Not in season
      </TextSmall>
    </div>
  </Fragment>
  : null
);
