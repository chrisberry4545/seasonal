
import React from 'react';
import { BareButton, TextMedium } from '@chrisb-dev/seasonal-shared-frontend-components';

export interface IDeleteItemButtonProps<T> {
  deleteItem: () => Promise<T>;
}

export const DeleteItemButton = <T extends {}>({
  deleteItem
}: IDeleteItemButtonProps<T>) => (
  <BareButton onClick={(deleteItem)}>
    <TextMedium>Delete</TextMedium>
  </BareButton>
);
