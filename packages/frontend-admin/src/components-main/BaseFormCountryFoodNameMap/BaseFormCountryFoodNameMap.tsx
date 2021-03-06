import React, { FC, useEffect, useState } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryFoodNameMap, ICountry, IFood, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { getAllCountries, getAllFood } from '../../services';

type ICountryFoodNameMapFormConfigProps =
  IDataFormConfigProps<ICountryFoodNameMap>;

const initialCountryFoodNameMapFormConfig: ICountryFoodNameMapFormConfigProps = {
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

export const BaseFormCountryFoodNameMap: FC<
  IGetAuthorizedBackendDataProps<ICountryFoodNameMap>
> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [
    config,
    setConfig
  ] = useState<ICountryFoodNameMapFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    countries: ICountry[],
    food: IFood[]
  ) => {
    const countryOptions = countries.map((country) => ({
      label: country.name,
      value: country.id
    }));
    const foodOptions = food.map((foodItem) => ({
      label: foodItem.name,
      value: foodItem.id
    }));
    setConfig({
      ...initialCountryFoodNameMapFormConfig,
      countryId: {
        options: countryOptions,
        type: 'select'
      },
      foodId: {
        options: foodOptions,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    Promise.all([
      getAllCountries(),
      getAllFood()
    ]).then(([countries, food]) =>
      updateConfigWithDropdowns(countries, food)
    );
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
