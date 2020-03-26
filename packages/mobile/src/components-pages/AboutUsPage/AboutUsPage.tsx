import React, { FC } from 'react';

import {
  AboutUs,
  HeaderConnecter,
  PrivacyPolicyLink
} from '../../components-main';

import {
  MainContainer,
  DefaultPaddingContainer
} from '../../components-layout';

export const AboutUsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DefaultPaddingContainer>
      <AboutUs />
      <PrivacyPolicyLink />
    </DefaultPaddingContainer>
  </MainContainer>
);
