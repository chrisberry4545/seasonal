import React, { Fragment } from 'react';

import './SeasonMenu.scss';

import {
  BareButton,
  CrossIcon,
  TextMedium,
  LoadingSpinner
} from '../../components-elements';

import {
  fadeInOutAnimation
} from '../../helpers';
import { PoseGroup } from 'react-pose';
import { ISeasonMenuProps } from './SeasonMenu.interface';

const OverlayFadeInOutAnimation = fadeInOutAnimation();

export const SeasonMenu = ({
  allBasicSeasonData,
  currentSeasonIndex,
  isCurrentRouteAllSeasons,
  isLoading,
  isMenuOpen,
  onSeasonSelected,
  onClose,
  onAllSeasonsSelected
}: ISeasonMenuProps) => (
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
      className={`c-season-menu ${isMenuOpen ? 'c-season-menu--is-open' : ''}`}>
      {
        !isLoading
          ? <Fragment>
              { allBasicSeasonData &&
                  allBasicSeasonData.map(({ name }, index) => (
                  <BareButton
                    key={name}
                    className={
                      `c-season-menu__button ${
                        !isCurrentRouteAllSeasons &&
                        index === currentSeasonIndex
                          ? 'c-season-menu__button--selected'
                          : ''
                        }`}
                    onClick={() => onSeasonSelected(index)}>
                    <TextMedium>{ name }</TextMedium>
                  </BareButton>
                ))
              }
              <BareButton className={
                `c-season-menu__button ${
                  isCurrentRouteAllSeasons
                    ? 'c-season-menu__button--selected'
                    : ''
                }`
                }
                onClick={onAllSeasonsSelected}>
                <TextMedium>All seasons</TextMedium>
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
