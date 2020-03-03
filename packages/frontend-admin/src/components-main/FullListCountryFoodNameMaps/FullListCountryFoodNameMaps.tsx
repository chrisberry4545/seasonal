import React, { FC } from 'react';
import { getAllCountryFoodNameMap, deleteCountryToFoodNameMap } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListCountryFoodNameMapInner: FC<IGetAuthorizedBackendDataProps<ICountryFoodNameMap[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Country Food Name Map'
    items={items}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.COUNTRY_FOOD_NAME_MAP}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteCountryToFoodNameMap(item.id).then((country) => {
      if (reload) {
        reload();
      }
      return country;
    })}
  />
);

export const FullListCountryFoodNameMaps = GetAuthorizedBackendData<ICountryFoodNameMap[]>(
  FullListCountryFoodNameMapInner,
  getAllCountryFoodNameMap
);
