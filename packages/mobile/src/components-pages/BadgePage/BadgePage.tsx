import React, { FC } from 'react';
import {
  BadgesDetailsLoaderConnecter,
  BadgesTopSectionConnecter,
  FoodForBadgeConnecter,
  HeaderConnecter
} from '../../components-main';
import { MainContainer, DetailsPageLayout } from '../../components-layout';

export const BadgePage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DetailsPageLayout>
      <BadgesDetailsLoaderConnecter />
      <BadgesTopSectionConnecter />
      <FoodForBadgeConnecter />
    </DetailsPageLayout>
  </MainContainer>
);
