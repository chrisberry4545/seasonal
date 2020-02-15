import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { updateFood, getSingleFood, getAllFood } from '../../services';
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

const EditFoodFormInner: FC<IGetAuthorizedBackendDataProps<IFood>> = ({
  items
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
        type: 'multiselect'
      }
    });
  };

  useEffect(() => {
    getAllFood()
      .then((food) => updateConfigWithFoodDropdowns(food));
  }, []);

  return <DataForm item={items}
    sendData={updateFood}
    formConfig={config} />;
};

export const EditFoodForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IFood>(
    EditFoodFormInner,
    () => {
      return getSingleFood(id as string);
    }
  );
  return <CreatedComponent />;
};
