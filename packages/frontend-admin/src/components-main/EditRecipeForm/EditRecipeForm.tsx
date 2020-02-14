import React, { FC, useState, useEffect } from 'react';
import { getSingleRecipe, updateRecipe, getAllFood } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe, IFood } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
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

const EditRecipeFormInner: FC<IGetAuthorizedBackendDataProps<IRecipe>> = ({
  items
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
        type: 'multiselect'
      },
      secondaryFoodInRecipeIds: {
        options,
        type: 'multiselect'
      }
    });
  };

  useEffect(() => {
    getAllFood()
      .then((food) => updateConfigWithFoodDropdowns(food));
  }, []);

  return <DataForm item={items} sendData={updateRecipe} formConfig={config} />;
};

export const EditRecipeForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IRecipe>(
    EditRecipeFormInner,
    () => {
      return getSingleRecipe(id as string);
    }
  );
  return <CreatedComponent />;
};
