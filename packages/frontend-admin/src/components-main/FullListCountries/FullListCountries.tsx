import React, { FC } from 'react';
import { getAllCountries, deleteCountry } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListCountriesInner: FC<IGetAuthorizedBackendDataProps<ICountry[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Countries'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.COUNTRY}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteCountry(item.id).then((country) => {
      if (reload) {
        reload();
      }
      return country;
    })}
  />
);

export const FullListCountries = GetAuthorizedBackendData<ICountry[]>(
  FullListCountriesInner,
  getAllCountries
);
