import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRegion, ICountry } from '@chrisb-dev/seasonal-shared';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getAllCountries } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IRegionFormConfigProps = IDataFormConfigProps<IRegion>;

const initialRegionFormConfig: IRegionFormConfigProps = {
  code: {
    type: 'text',
    validation: [requiredValidation]
  },

  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  isDisabled: {
    type: 'checkbox'
  }
};

export const BaseFormRegion: FC<IGetAuthorizedBackendDataProps<IRegion>> = ({
  items,
  updateMethod
}) => {
  const [config, setConfig] = useState<IRegionFormConfigProps | null>(null);

  const updateConfigWithFoodDropdowns = (countries: ICountry[]) => {
    const options = countries.map((country) => ({
      label: country.name,
      value: country.id
    }));
    setConfig({
      ...initialRegionFormConfig,
      countryId: {
        options,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    getAllCountries()
      .then((countries) => updateConfigWithFoodDropdowns(countries));
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config} />;
};
