import React, { FC } from 'react';
import { TextMedium } from '../Text';
import './ValidationMessage.scss';

export const ValidationMessage: FC<{
  className?: string
}> = ({
  className,
  children
}) => (
  <TextMedium
    className={`${(className || '')} c-validation-message`}>
      {children}
  </TextMedium>
);
