import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type ICountryFormConfigProps = IDataFormConfigProps<ICountry>;

const countryFormConfig: ICountryFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  bounds: {
    type: 'coordinate-array'
  }
};

export const BaseFormCountry: FC<IGetAuthorizedBackendDataProps<ICountry>> = ({
  items,
  updateMethod,
  buttonText
}) => (
  <DataForm item={items}
    sendData={updateMethod}
    formConfig={countryFormConfig}
    buttonText={buttonText} />
);
