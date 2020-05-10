import React, { FC } from 'react';

import './HeaderAndBackButton.scss';

import {
  ArrowIcon,
  BareButton,
  TextHeadingMedium
} from '@chrisb-dev/seasonal-shared-frontend-components';

import {
  IHeaderAndBackButtonProps
} from './HeaderAndBackButton.interface';

export const HeaderAndBackButton: FC<IHeaderAndBackButtonProps> = ({
  title,
  onGoBack
}) => (
  <div className='c-header-and-back-button'>
    <BareButton
      data-e2e='header-go-back-button'
      className='c-header-and-back-button__back-button'
      onClick={onGoBack}>
      <ArrowIcon />
    </BareButton>
    <TextHeadingMedium className='c-header-and-back-button__title'>
      {title}
    </TextHeadingMedium>
  </div>
);
