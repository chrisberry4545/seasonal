import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IUser, USER_ROLES } from '@chrisb-dev/seasonal-shared';
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
    type: 'password',
    validation: [requiredValidation]
  },

  roles: {
    options: Object.values(USER_ROLES).map((role) => ({
      label: role,
      value: role
    })),
    type: 'multiselect'
  }
};

export const BaseFormUser: FC<IGetAuthorizedBackendDataProps<IUser>> = ({
  items,
  updateMethod,
  buttonText
}) => (
  <DataForm item={items}
    sendData={updateMethod}
    formConfig={userFormConfig}
    buttonText={buttonText} />
);
