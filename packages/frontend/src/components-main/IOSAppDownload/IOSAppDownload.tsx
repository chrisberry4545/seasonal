import React, { FC } from 'react';

import './IOSAppDownload.scss';

export const IOSAppDownload: FC<{}> = () => (
  <a className='c-ios-app-download'
    href='https://apps.apple.com/us/app/eat-seasonal/id1496551124?ls=1'>
    <img className='c-ios-app-download__image'
      alt='Get it on the iOS store'
      src='https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png'/>
  </a>
);
