import React, { Fragment, FC } from 'react';

import './SeasonMenu.scss';

import {
  BareButton,
  CrossIcon,
  TextMedium,
  LoadingSpinner
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  fadeInOutAnimation
} from '../../helpers';
import { PoseGroup } from 'react-pose';
import { ISeasonMenuProps } from './SeasonMenu.interface';

const OverlayFadeInOutAnimation = fadeInOutAnimation();

export const SeasonMenu: FC<ISeasonMenuProps> = ({
  allBasicSeasonData,
  currentSeasonIndex,
  isCurrentRouteAllSeasons,
  isCurrentRouteSettings,
  isLoading,
  isMenuOpen,
  onSeasonSelected,
  onClose,
  onAllSeasonsSelected,
  onSettingsSelected
}) => (
  <div>
    <PoseGroup>
      {
        isMenuOpen &&
        <OverlayFadeInOutAnimation key='season-menu-overlay'
          className='c-season-menu__overlay'
          onClick={onClose} />
      }
    </PoseGroup>
    <nav
      data-e2e='season-menu'
      className={`c-season-menu ${isMenuOpen ? 'c-season-menu--is-open' : ''}`}>
      {
        !isLoading
          ? <Fragment>
              { allBasicSeasonData &&
                  allBasicSeasonData.map(({ name }, index) => (
                  <BareButton
                    e2eTag={`season-menu-${name}`}
                    key={name}
                    className={
                      `c-season-menu__button ${
                        !isCurrentRouteSettings
                        && !isCurrentRouteAllSeasons
                        && index === currentSeasonIndex
                          ? 'c-season-menu__button--selected'
                          : ''
                        }`}
                    onClick={() => onSeasonSelected(index)}>
                    <TextMedium>{ name }</TextMedium>
                  </BareButton>
                ))
              }
              <BareButton
                e2eTag='season-menu-All'
                className={
                  `c-season-menu__button ${
                    isCurrentRouteAllSeasons
                      ? 'c-season-menu__button--selected'
                      : ''
                    }`
                  }
                onClick={onAllSeasonsSelected}>
                <TextMedium>All seasons</TextMedium>
              </BareButton>
              <BareButton
                e2eTag='season-menu-Settings'
                className={
                  `c-season-menu__button ${
                    isCurrentRouteSettings
                      ? 'c-season-menu__button--selected'
                      : ''
                    }`
                }
                onClick={onSettingsSelected}>
                <TextMedium>Settings</TextMedium>
              </BareButton>
          </Fragment>
          : <div className='c-season-menu__loading-spinner-wrapper'>
            <LoadingSpinner />
          </div>
      }
      <BareButton className='c-season-menu__close-btn'
        onClick={onClose}>
        <CrossIcon />
      </BareButton>
    </nav>
  </div>
);
