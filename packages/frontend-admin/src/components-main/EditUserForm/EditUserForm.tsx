import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getSingleUser, updateUser } from '../../services';
import { BaseFormUser } from '../BaseFormUser/BaseFormUser';
import { LayoutWithTitle } from '../../components-layouts';

export const EditUserForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit User'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormUser}
        requestDataMethod={async () => {
          const user = await getSingleUser(id as string);
          return {
            ...user,
            password: ''
          };
        }}
        updateMethod={updateUser}
        />
    </LayoutWithTitle>
  );
};
