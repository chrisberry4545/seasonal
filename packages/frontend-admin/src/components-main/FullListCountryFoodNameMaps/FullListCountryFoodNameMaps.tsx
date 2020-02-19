import React, { FC } from 'react';
import { getAllCountryFoodNameMap, deleteCountryToFoodNameMap } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { Link } from 'react-router-dom';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListCountryFoodNameMapInner: FC<IGetAuthorizedBackendDataProps<ICountryFoodNameMap[]>> = ({
  items,
  reload
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.COUNTRY_FOOD_NAME_MAP}/${ROUTES.EDIT}/${item.id}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteCountryToFoodNameMap(item.id).then((country) => {
              if (reload) {
                reload();
              }
              return country;
            })
          } />
        </div>
      )
    }
  </div>
);

export const FullListCountryFoodNameMaps = GetAuthorizedBackendData<ICountryFoodNameMap[]>(
  FullListCountryFoodNameMapInner,
  getAllCountryFoodNameMap
);
