import React, { FC } from 'react';
import {
  PageWithMenu,
  AllSeasonsFoodConnector,
  AllSeasonsGraphConnector,
  AllSeasonsRecipesConnector,
  BottomTabsConnecter
} from '../../components-main';

import './AllSeasonsPage.scss';

export const AllSeasonsPage: FC<{}> = () => (
  <PageWithMenu>
    <div className='c-all-seasons-page'>
      <AllSeasonsGraphConnector />
      <AllSeasonsFoodConnector />
      <AllSeasonsRecipesConnector />
      <BottomTabsConnecter />
    </div>
  </PageWithMenu>
);
