import React, { FC } from 'react';
import { getAllCountries, deleteCountry } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { Link } from 'react-router-dom';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListCountriesInner: FC<IGetAuthorizedBackendDataProps<ICountry[]>> = ({
  items,
  reload
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.COUNTRY}/${ROUTES.EDIT}/${item.id}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteCountry(item.id).then((country) => {
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

export const FullListCountries = GetAuthorizedBackendData<ICountry[]>(
  FullListCountriesInner,
  getAllCountries
);
