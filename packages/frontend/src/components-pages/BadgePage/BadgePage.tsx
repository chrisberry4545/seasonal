import React, { FC } from 'react';

import {
  PageWithMenu
} from '../../components-main';
import {
  DetailsPageLayout
} from '../../components-layout';
import {
  BadgesTopSectionConnecter,
  FoodForBadgeConnecter
} from '../../components-main';

export const BadgePage: FC<{}> = () => (
  <PageWithMenu>
    <DetailsPageLayout>
      <BadgesTopSectionConnecter />
      <FoodForBadgeConnecter />
    </DetailsPageLayout>
  </PageWithMenu>
);
