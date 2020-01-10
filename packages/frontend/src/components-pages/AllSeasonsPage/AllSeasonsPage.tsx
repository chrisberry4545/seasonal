import React, { FC } from 'react';
import {
  PageWithMenu,
  AllSeasonsConnector,
  AllSeasonsGraphConnector
} from '../../components-main';

import './AllSeasonsPage.scss';

export const AllSeasonsPage: FC<{}> = () => (
  <PageWithMenu>
    <div className='c-all-seasons-page'>
      <AllSeasonsGraphConnector />
      <AllSeasonsConnector />
    </div>
  </PageWithMenu>
);
