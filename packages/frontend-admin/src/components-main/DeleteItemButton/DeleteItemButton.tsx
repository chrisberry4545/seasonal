
import React from 'react';
import { BareButton, TextSmall } from '@chrisb-dev/seasonal-shared-frontend-components';

export interface IDeleteItemButtonProps<T> {
  deleteItem: () => Promise<T>;
}

export const DeleteItemButton = <T extends {}>({
  deleteItem
}: IDeleteItemButtonProps<T>) => (
  <BareButton onClick={(deleteItem)}>
    <TextSmall>Delete</TextSmall>
  </BareButton>
);
