import React, { FC } from 'react';
import { getAllUsers, deleteUser } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListUsersInner: FC<IGetAuthorizedBackendDataProps<IUser[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Users'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => item.username}
    getItemEditUrl={(item) => `${ROUTES.USER}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => (
      deleteUser(item.id).then((user) => {
        if (reload) {
          reload();
        }
        return user;
      })
    )}
  />
);

export const FullListUsers = GetAuthorizedBackendData<IUser[]>(
  FullListUsersInner,
  getAllUsers
);
