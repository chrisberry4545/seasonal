import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getAllCountries } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

export type IDbRegionFormConfigProps = IDataFormConfigProps<IDbRegion>;

const initialRegionFormConfig: IDbRegionFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  isDisabled: {
    type: 'checkbox'
  },

  lat: {
    type: 'number',
    validation: [requiredValidation]
  },
  lng: {
    type: 'number',
    validation: [requiredValidation]
  }
};

export const BaseFormRegion: FC<IGetAuthorizedBackendDataProps<IDbRegion>> = ({
  items,
  updateMethod,
  buttonText,
  additionalConfig
}) => {
  const [config, setConfig] = useState<IDbRegionFormConfigProps | null>(null);

  useEffect(() => {
    getAllCountries()
      .then((countries) => {
        const options = countries.map((country) => ({
          label: country.name,
          value: country.id
        }));
        setConfig({
          ...additionalConfig,
          ...initialRegionFormConfig,
          countryId: {
            options,
            type: 'select',
            validation: [requiredValidation]
          }
        });
      });
  }, [additionalConfig]);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
