import React, { FC, useEffect, useState } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ITranslationsCountryName, ICountry, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { getAllCountries } from '../../services';

type ITranslationsCountryNameFormConfigProps =
  IDataFormConfigProps<ITranslationsCountryName>;

const initialTranslationsCountryNameFormConfig: ITranslationsCountryNameFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  languages: {
    options: Object.values(LANGUAGES)
      .map((value) => ({ label: value, value })),
    type: 'multiselect',
    validation: [requiredValidation]
  }
};

export const BaseFormTranslationsCountryName: FC<
  IGetAuthorizedBackendDataProps<ITranslationsCountryName>
> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [
    config,
    setConfig
  ] = useState<ITranslationsCountryNameFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    countries: ICountry[]
  ) => {
    const countryOptions = countries.map((country) => ({
      label: country.name,
      value: country.id
    }));
    setConfig({
      ...initialTranslationsCountryNameFormConfig,
      countryId: {
        options: countryOptions,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    getAllCountries().then((countries) =>
      updateConfigWithDropdowns(countries)
    );
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
