import React, { FC } from 'react';
import { getAllFood, deleteFood } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListFoodInner: FC<IGetAuthorizedBackendDataProps<IFood[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Food'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.FOOD}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteFood(item.id).then((food) => {
      if (reload) {
        reload();
      }
      return food;
    })}
  />
);
export const FullListFood = GetAuthorizedBackendData<IFood[]>(
  FullListFoodInner,
  getAllFood
);
