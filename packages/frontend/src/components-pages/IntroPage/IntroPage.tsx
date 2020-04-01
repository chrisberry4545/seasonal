import React, { FC } from 'react';

import './IntroPage.scss';

import {
  AboutEatSeasonal,
  ViewAppLinks,
  WhyEatSeasonal
} from '../../components-main';

export const IntroPage: FC = () => (
  <div className='c-intro-page'>
    <div className='c-intro-page__top-section'>
      <div className='c-intro-page__splash-wrapper'>
        <img alt='Eat Seasonal splash'
          className='c-intro-page__splash-image' src='/splash.png'/>
      </div>
      <ViewAppLinks />
    </div>
    <AboutEatSeasonal />
    <WhyEatSeasonal />
    <div className='c-intro-page__mobile-extra-app-links'>
      <ViewAppLinks />
    </div>
  </div>
);
