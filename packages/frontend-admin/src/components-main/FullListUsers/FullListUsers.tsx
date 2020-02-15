import React, { FC } from 'react';
import { getAllUsers } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';

const FullListUsersInner: FC<IGetAuthorizedBackendDataProps<IUser[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.id}>
          {item.username}
          <Link to={`${ROUTES.USER}/${item.id}`}>Edit</Link>
        </div>
      )
    }
  </div>
);
export const FullListUsers = GetAuthorizedBackendData<IUser[]>(
  FullListUsersInner,
  getAllUsers
);
