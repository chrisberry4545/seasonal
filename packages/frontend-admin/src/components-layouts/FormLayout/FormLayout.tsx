import React, { FC } from 'react';
import './FormLayout.scss';
import { TextHeadingMedium } from '@chrisb-dev/seasonal-shared-frontend-components';

interface IFormLayout {
  title?: string;
}

export const FormLayout: FC<IFormLayout> = ({
  children,
  title
}) => (
  <div className='c-form-layout'>
    {
      title
      && <TextHeadingMedium className='c-form-layout__title'>
        {title}
      </TextHeadingMedium>
    }
    { children }
  </div>
);
