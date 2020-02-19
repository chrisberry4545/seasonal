import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type ICountryRecipeNameMapFormConfigProps =
  IDataFormConfigProps<ICountryRecipeNameMap>;

const countryRecipeNameMapFormConfig: ICountryRecipeNameMapFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  }
};

export const BaseFormCountryRecipeNameMap: FC<
  IGetAuthorizedBackendDataProps<ICountryRecipeNameMap>
> = ({
  items,
  updateMethod
}) => (
  <DataForm item={items}
    sendData={updateMethod}
    formConfig={countryRecipeNameMapFormConfig} />
);
