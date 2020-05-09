import React, { FC } from 'react';
import {
  DetailsPageLayout
} from '../../components-layout';
import {
  PageWithMenu,
  BadgesDetailsLoaderConnecter,
  BadgesTopSectionConnecter,
  FoodForBadgeConnecter
} from '../../components-main';

export const BadgePage: FC<{}> = () => (
  <PageWithMenu>
    <DetailsPageLayout>
      <BadgesDetailsLoaderConnecter />
      <BadgesTopSectionConnecter />
      <FoodForBadgeConnecter />
    </DetailsPageLayout>
  </PageWithMenu>
);
