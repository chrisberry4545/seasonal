import React, { FC } from 'react';

import './ViewAppLinks.scss';

import {
  AndroidAppDownload
} from '../AndroidAppDownload/AndroidAppDownload';

import {
  ViewWebAppVersionConnector
} from '../ViewWebAppVersion/ViewWebAppVersion.connector';

export const ViewAppLinks: FC<{}> = () => (
  <div className='c-view-app-links'>
    <AndroidAppDownload />
    <ViewWebAppVersionConnector />
  </div>
);
