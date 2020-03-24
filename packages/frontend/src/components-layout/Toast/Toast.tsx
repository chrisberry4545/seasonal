import React, { FC } from 'react';
import { BareButton, CrossIcon } from '@chrisb-dev/seasonal-shared-frontend-components';
import './Toast.scss';

export const Toast: FC<{
  onClose?: () => void,
  isVisible: boolean
}> = ({
  children,
  onClose,
  isVisible
} = {
  isVisible: false
}) => (
  isVisible
    ? <div className='c-toast'>
        <div>{ children }</div>
        {
          onClose &&
            <BareButton onClick={onClose} className='c-toast__close-btn'>
              <CrossIcon className='c-toast__cross-icon' />
            </BareButton>
        }
      </div>
    : null
);
