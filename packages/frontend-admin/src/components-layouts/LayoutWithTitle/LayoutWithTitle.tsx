import React, { FC, Fragment } from 'react';
import './LayoutWithTitle.scss';
import { TextHeadingMedium } from '@chrisb-dev/seasonal-shared-frontend-components';

interface ILayoutWithTitle {
  title?: string;
}

export const LayoutWithTitle: FC<ILayoutWithTitle> = ({
  children,
  title
}) => (
  <Fragment>
    {
      title
      && <TextHeadingMedium className='c-form-layout__title'>
        {title}
      </TextHeadingMedium>
    }
    { children }
  </Fragment>
);
