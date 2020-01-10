import React, { FC } from 'react';

import './AndroidAppDownload.scss';

export const AndroidAppDownload: FC<{}> = () => (
  <a className='c-android-app-download'
    href={
    'https://play.google.com/store/apps/details?id=com.chrisbdev.seasonal&p' +
      'campaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
  }>
    <img className='c-android-app-download__image'
      alt='Get it on Google Play'
      src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
  </a>
);
