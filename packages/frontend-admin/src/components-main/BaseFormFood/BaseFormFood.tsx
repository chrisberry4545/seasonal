import React, { FC, useState, useEffect } from 'react';
import {
  IGetAuthorizedBackendDataProps
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood, IBadge } from '@chrisb-dev/seasonal-shared-models';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getAllFood, getAllBadges } from '../../services';
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

  const updateConfig = (
    food: IFood[],
    badges: IBadge[]
  ) => {
    const foodOptions = food.map((foodItem) => ({
      label: foodItem.name,
      value: foodItem.id
    }));
    const badgeOptions = badges.map((badge) => ({
      label: badge.name,
      value: badge.id
    }));
    setConfig({
      ...initialFoodFormConfig,
      substituteFoodIds: {
        options: foodOptions,
        type: 'searchable-multiselect'
      },

      badgeIds: {
        options: badgeOptions,
        type: 'searchable-multiselect'
      }
    });
  };

  useEffect(() => {
    Promise.all([
      getAllFood(),
      getAllBadges()
    ]).then(([food, badges]) => updateConfig(
      food as IFood[], badges as IBadge[]
    ));
  }, []);

  return <DataForm item={items}
    sendData={updateMethod}
    formConfig={config}
    buttonText={buttonText} />;
};
