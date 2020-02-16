import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
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

export const BaseFormUser: FC<IGetAuthorizedBackendDataProps<IUser>> = ({
  items,
  updateMethod
}) => (
  <DataForm item={items}
    sendData={updateMethod}
    formConfig={userFormConfig} />
);
