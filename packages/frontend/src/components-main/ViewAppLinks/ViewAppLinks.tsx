import React, { FC } from 'react';
import './ViewAppLinks.scss';
import {
  AndroidAppDownload
} from '../AndroidAppDownload/AndroidAppDownload';
import {
  ViewWebAppVersionConnector
} from '../ViewWebAppVersion/ViewWebAppVersion.connector';
import { IOSAppDownload } from '../IOSAppDownload/IOSAppDownload';

export const ViewAppLinks: FC<{}> = () => (
  <div className='c-view-app-links'>
    <IOSAppDownload />
    <AndroidAppDownload />
    <ViewWebAppVersionConnector />
  </div>
);
