import React, { FC } from 'react';
import { getAllFood, deleteFood } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListFoodInner: FC<IGetAuthorizedBackendDataProps<IFood[]>> = ({
  items,
  reload
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.FOOD}/${ROUTES.EDIT}/${item.id}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteFood(item.id).then((food) => {
              if (reload) {
                reload();
              }
              return food;
            })
          } />
        </div>
      )
    }
  </div>
);
export const FullListFood = GetAuthorizedBackendData<IFood[]>(
  FullListFoodInner,
  getAllFood
);
