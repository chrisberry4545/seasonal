import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap, ICountry, IRecipe } from '@chrisb-dev/seasonal-shared';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { getAllCountries, getAllRecipes } from '../../services';

type ICountryRecipeNameMapFormConfigProps =
  IDataFormConfigProps<ICountryRecipeNameMap>;

const initialCountryRecipeNameMapFormConfig: ICountryRecipeNameMapFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  }
};

export const BaseFormCountryRecipeNameMap: FC<
  IGetAuthorizedBackendDataProps<ICountryRecipeNameMap>
> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [
    config,
    setConfig
  ] = useState<ICountryRecipeNameMapFormConfigProps | null>(null);

  const updateConfigWithDropdowns = (
    countries: ICountry[],
    recipes: IRecipe[]
  ) => {
    const countryOptions = countries.map((country) => ({
      label: country.name,
      value: country.id
    }));
    const recipeOptions = recipes.map((foodItem) => ({
      label: foodItem.name,
      value: foodItem.id
    }));
    setConfig({
      ...initialCountryRecipeNameMapFormConfig,
      countryId: {
        options: countryOptions,
        type: 'select'
      },
      recipeId: {
        options: recipeOptions,
        type: 'select'
      }
    });
  };

  useEffect(() => {
    Promise.all([
      getAllCountries(),
      getAllRecipes()
    ]).then(([countries, recipes]) =>
      updateConfigWithDropdowns(countries, recipes)
    );
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
