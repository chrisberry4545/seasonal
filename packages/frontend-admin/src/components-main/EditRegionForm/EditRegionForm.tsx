import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRegion, ICountry } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getSingleRegion, updateRegion, getAllCountries } from '../../services';
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

const EditRegionFormInner: FC<IGetAuthorizedBackendDataProps<IRegion>> = ({
  items
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
    sendData={updateRegion}
    formConfig={config} />;
};

export const EditRegionForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IRegion>(
    EditRegionFormInner,
    () => {
      return getSingleRegion(id as string);
    }
  );
  return <CreatedComponent />;
};
