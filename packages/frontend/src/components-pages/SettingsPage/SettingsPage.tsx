import React, { FC } from 'react';
import {
  PageWithMenu,
  LocationSelectorConnecter
} from '../../components-main';

import './SettingsPage.scss';

export const SettingsPage: FC<{}> = () => (
  <PageWithMenu>
    <div className='c-settings-page'>
      <LocationSelectorConnecter />
    </div>
  </PageWithMenu>
);
