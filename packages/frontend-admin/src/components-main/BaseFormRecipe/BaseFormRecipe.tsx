import React, { FC, useState, useEffect } from 'react';
import { getAllFood } from '../../services';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe, IFood } from '@chrisb-dev/seasonal-shared-models';
import { DataForm, IDataFormConfigProps } from '../DataForm/DataForm';
import { requiredValidation } from '@chrisb-dev/seasonal-shared-frontend-components';

type IRecipeFormConfigProps = IDataFormConfigProps<IRecipe>;

const initialRecipeFormConfig: IRecipeFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  linkUrl: {
    type: 'text',
    validation: [requiredValidation]
  },

  imageUrlSmall: {
    type: 'text',
    validation: [requiredValidation]
  },

  isVegan: {
    type: 'checkbox'
  },

  isVegetarian: {
    type: 'checkbox'
  }
};

export const BaseFormRecipe: FC<IGetAuthorizedBackendDataProps<IRecipe>> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [config, setConfig] = useState<IRecipeFormConfigProps | null>(null);

  const updateConfigWithFoodDropdowns = (food: IFood[]) => {
    const options = food.map((foodItem) => ({
      label: foodItem.name,
      value: foodItem.id
    }));
    setConfig({
      ...initialRecipeFormConfig,
      primaryFoodInRecipeIds: {
        options,
        type: 'searchable-multiselect'
      },
      secondaryFoodInRecipeIds: {
        options,
        type: 'searchable-multiselect'
      }
    });
  };

  useEffect(() => {
    getAllFood()
      .then((food) => updateConfigWithFoodDropdowns(food));
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
