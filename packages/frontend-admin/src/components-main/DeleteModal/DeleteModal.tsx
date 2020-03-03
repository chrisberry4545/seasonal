import React, { useState } from 'react';
import './DeleteModal.scss';
import { LoadingSpinner, BareButton, TextSmall, TextMedium } from '@chrisb-dev/seasonal-shared-frontend-components';
import { ModalLayout } from '../../components-layouts';

export interface IDeleteModal<T> {
  deleteItem: () => Promise<T>;
  cancel: () => void;
}

export const DeleteModal = <T extends {}> ({
  deleteItem,
  cancel
}: IDeleteModal<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteButtonPressed = async () => {
    setIsLoading(true);
    await deleteItem();
    setIsLoading(false);
  };

  return (
    <ModalLayout>
      <div className='c-delete-modal'>
        <TextMedium>Are you sure you want to delete this item?</TextMedium>
        <div className='c-delete-modal__btns'>
          <BareButton onClick={cancel}>
            <TextSmall>Cancel</TextSmall>
          </BareButton>
          <BareButton onClick={(deleteButtonPressed)}>
            <TextSmall>Delete</TextSmall>
          </BareButton>
        </div>
        {
          isLoading
          && <div className='c-delete-modal__spinner'><LoadingSpinner /></div>
        }
      </div>
    </ModalLayout>
  );
};
