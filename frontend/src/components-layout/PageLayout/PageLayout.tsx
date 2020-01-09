import React, { FC } from 'react';

import './PageLayout.scss';

export const PageLayout: FC<{}> = ({
  children
}) => (
  <div className='c-page-layout'>
    { children }
  </div>
);
