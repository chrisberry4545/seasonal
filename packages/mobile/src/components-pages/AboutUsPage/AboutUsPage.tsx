import React, { FC } from 'react';

import {
  AboutUs,
  HeaderConnecter,
  PrivacyPolicyLink
} from '../../components-main';

import { MainContainer } from '../../components-layout';

export const AboutUsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <AboutUs />
    <PrivacyPolicyLink />
  </MainContainer>
);
