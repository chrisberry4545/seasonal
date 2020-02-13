import React, { FC } from 'react';
import { getAllCountries } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { Link } from 'react-router-dom';

const CountriesFullListInner: FC<IGetAuthorizedBackendDataProps<ICountry[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.COUNTRY}/${item.id}`}>Edit</Link>
        </div>
      )
    }
  </div>
);

export const CountriesFullList = GetAuthorizedBackendData<ICountry[]>(
  CountriesFullListInner,
  getAllCountries
);
