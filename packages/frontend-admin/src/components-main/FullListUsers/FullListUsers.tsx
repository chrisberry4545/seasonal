import React, { FC } from 'react';
import { getAllUsers, deleteUser } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListUsersInner: FC<IGetAuthorizedBackendDataProps<IUser[]>> = ({
  items
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.id}>
          {item.username}
          <Link to={`${ROUTES.USER}/${ROUTES.EDIT}/${item.id}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteUser(item.id).then((user) => {
              location.reload();
              return user;
            })
          } />
        </div>
      )
    }
  </div>
);
export const FullListUsers = GetAuthorizedBackendData<IUser[]>(
  FullListUsersInner,
  getAllUsers
);
