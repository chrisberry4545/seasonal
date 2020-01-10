import React, { FC } from 'react';
import { PageLayout } from '../../components-layout/PageLayout/PageLayout';
import { HeaderConnecter } from '../Header/Header.connector';
import { SeasonMenuConnecter } from '../SeasonMenu/SeasonMenu.connector';

export const PageWithMenu: FC<{}> = ({
  children
}) => (
  <PageLayout>
    <HeaderConnecter />
    <SeasonMenuConnecter />
    { children }
  </PageLayout>
);
