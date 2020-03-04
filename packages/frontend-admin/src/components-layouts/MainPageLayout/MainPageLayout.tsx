import React, { FC } from 'react';
import './MainPageLayout.scss';

export const MainPageLayout: FC<{}> = ({
  children
}) => (
  <div className='c-main-page-layout'>
    { children }
  </div>
);
