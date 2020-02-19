import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type ICountryFoodNameMapFormConfigProps =
  IDataFormConfigProps<ICountryFoodNameMap>;

const countryFoodNameMapFormConfig: ICountryFoodNameMapFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  }
};

export const BaseFormCountryFoodNameMap: FC<
  IGetAuthorizedBackendDataProps<ICountryFoodNameMap>
> = ({
  items,
  updateMethod
}) => (
  <DataForm item={items}
    sendData={updateMethod}
    formConfig={countryFoodNameMapFormConfig} />
);
