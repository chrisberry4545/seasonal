import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getSingleUser, updateUser } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IUserFormConfigProps = IDataFormConfigProps<IUser>;

const userFormConfig: IUserFormConfigProps = {
  username: {
    type: 'text',
    validation: [requiredValidation]
  },

  password: {
    type: 'text',
    validation: [requiredValidation]
  }
};

const EditUserFormInner: FC<IGetAuthorizedBackendDataProps<IUser>> = ({
  items
}) => (
  <DataForm item={items}
    sendData={updateUser}
    formConfig={userFormConfig} />
);

export const EditUserForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IUser>(
    EditUserFormInner,
    () => {
      return getSingleUser(id as string);
    },
    updateUser
  );
  return <CreatedComponent />;
};
