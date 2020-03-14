import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleUser, updateUser } from '../../services';
import { BaseFormUser } from '../BaseFormUser/BaseFormUser';
import { LayoutWithTitle } from '../../components-layouts';

export const EditUserForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IUser>(
    BaseFormUser,
    async () => {
      const user = await getSingleUser(id as string);
      return {
        ...user,
        password: ''
      };
    },
    updateUser
  );
  return (
    <LayoutWithTitle title='Edit User'>
      <CreatedComponent />
    </LayoutWithTitle>
  );
};
