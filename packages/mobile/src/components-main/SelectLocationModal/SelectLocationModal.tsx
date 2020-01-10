import React, { FC } from 'react';
import { ISelectLocationModalProps } from './SelectLocationModal.interface';
import { SelectLocationConnecter } from '../SelectLocation/SelectLocation.connector';
import { ModalLayout } from '../../components-layout';

export const SelectLocationModal: FC<ISelectLocationModalProps> = ({
  isVisible,
  closeLocationPopup
}) => (
  <ModalLayout
    isVisible={isVisible}
    onClose={closeLocationPopup}>
      <SelectLocationConnecter />
  </ModalLayout>
);
