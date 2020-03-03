import React, { FC } from 'react';
import './ModalLayout.scss';

export const ModalLayout: FC<{}> = ({
  children
}) => (
  <div className='c-modal-layout'>
    { children }
  </div>
);
