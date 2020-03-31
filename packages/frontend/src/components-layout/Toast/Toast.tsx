import React, { FC } from 'react';
import { BareButton, CrossIcon } from '@chrisb-dev/seasonal-shared-frontend-components';
import './Toast.scss';

export const Toast: FC<{
  onClose?: () => void,
  isVisible: boolean,
  'data-e2e'?: string
}> = ({
  children,
  onClose,
  isVisible,
  ...rest
} = {
  isVisible: false
}) => (
  isVisible
    ? <div data-e2e={rest['data-e2e']} className='c-toast'>
        <div>{ children }</div>
        {
          onClose &&
            <BareButton data-e2e='modal-close-btn'
              onClick={onClose} className='c-toast__close-btn'>
              <CrossIcon className='c-toast__cross-icon' />
            </BareButton>
        }
      </div>
    : null
);
