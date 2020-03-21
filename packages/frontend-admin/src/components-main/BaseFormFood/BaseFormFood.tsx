import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getAllFood } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IFoodFormConfigProps = IDataFormConfigProps<IFood>;

const initialFoodFormConfig: IFoodFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  },

  imageUrlSmall: {
    type: 'text',
    validation: [requiredValidation]
  },

  description: {
    type: 'text',
    validation: [requiredValidation]
  }
};

export const BaseFormFood: FC<IGetAuthorizedBackendDataProps<IFood>> = ({
  items,
  updateMethod,
  buttonText
}) => {
  const [config, setConfig] = useState<IFoodFormConfigProps | null>(null);

  const updateConfigWithFoodDropdowns = (food: IFood[]) => {
    const options = food.map((foodItem) => ({
      label: foodItem.name,
      value: foodItem.id
    }));
    setConfig({
      ...initialFoodFormConfig,
      substituteFoodIds: {
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
