import React, { FC } from 'react';

import './DetailsPageLayout.scss';

export const DetailsPageLayout: FC<{}> = ({
  children
}) => (
  <div className='c-details-page-layout'>
    {children}
  </div>
);
