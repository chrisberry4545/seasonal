import React, { FC } from 'react';
import './LayoutWithTitle.scss';
import { TextHeadingMedium } from '@chrisb-dev/seasonal-shared-frontend-components';

interface ILayoutWithTitle {
  title?: string;
}

export const LayoutWithTitle: FC<ILayoutWithTitle> = ({
  children,
  title
}) => (
  <div className='c-layout-with-title'>
    {
      title
      && <TextHeadingMedium className='c-layout-with-title__title'>
        {title}
      </TextHeadingMedium>
    }
    { children }
  </div>
);
