import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IBadgeFormConfigProps = IDataFormConfigProps<IBadge>;

const badgeFormConfig: IBadgeFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  }
};

export const BaseFormBadge: FC<IGetAuthorizedBackendDataProps<IBadge>> = ({
  items,
  updateMethod,
  buttonText
}) => (
  <DataForm item={items}
    sendData={updateMethod}
    formConfig={badgeFormConfig}
    buttonText={buttonText} />
);
