import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion, ICountry } from '@chrisb-dev/seasonal-shared';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getAllCountries } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IDbRegionFormConfigProps = IDataFormConfigProps<IDbRegion>;

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
  updateMethod
}) => {
  const [config, setConfig] = useState<IDbRegionFormConfigProps | null>(null);

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
