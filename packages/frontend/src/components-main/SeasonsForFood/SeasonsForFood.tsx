import React, { Fragment, FC } from 'react';
import './SeasonsForFood.scss';
import {
  TextMedium,
  TextSmall,
  BareButton,
  TextHeadingSmall
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { ISeasonForFoodProps } from './SeasonsForFood.interface';
import i18n from 'i18n-js';

export const SeasonsForFood: FC<ISeasonForFoodProps> = ({
  isLoading,
  seasonsSelectedForFood,
  onSeasonSelected
}) => (
  !isLoading
    ? <Fragment>
    <TextHeadingSmall
      className='c-season-for-food__list-heading'>
        {i18n.t('seasonsForFoodTitle')}
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
            data-e2e='season-for-food-btn'
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
        {i18n.t('seasonsForFoodKeyInSeason')}
      </TextSmall>
    </div>
    <div
      className='c-season-food__in-season-key'>
      <TextSmall className='c-season-food__in-season-key__text'>
        {i18n.t('seasonsForFoodKeyNotInSeason')}
      </TextSmall>
    </div>
  </Fragment>
  : null
);
