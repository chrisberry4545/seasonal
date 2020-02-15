import React, { FC } from 'react';
import { getAllFood } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';

const FullListFoodInner: FC<IGetAuthorizedBackendDataProps<IFood[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.FOOD}/${item.id}`}>Edit</Link>
        </div>
      )
    }
  </div>
);
export const FullListFood = GetAuthorizedBackendData<IFood[]>(
  FullListFoodInner,
  getAllFood
);
