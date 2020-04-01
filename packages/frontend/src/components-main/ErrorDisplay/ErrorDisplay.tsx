import React, { FC } from 'react';

import { IErrorDisplayProps } from './ErrorDisplay.interface';
import {
  TextMedium
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { Toast } from '../../components-layout';
import './ErrorDisplay.scss';

export const ErrorDisplay: FC<IErrorDisplayProps> = ({
  isVisible,
  hideErrorDisplay
}) => (
  <Toast type='error'
    onClose={hideErrorDisplay}
    isVisible={isVisible}>
    <TextMedium className='c-error__text'>
      It looks like something has gone wrong!
      <br />
      Please try again later.
    </TextMedium>
  </Toast>
);
