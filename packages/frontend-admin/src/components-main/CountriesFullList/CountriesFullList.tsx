import React, { FC } from 'react';
import { getAllCountries } from '../../services';
import {
  IGenericFullListInnerProps,
  GenericFullList
} from '../GenericFullList/GenericFullList';
import { ICountry } from '@chrisb-dev/seasonal-shared';

const CountriesFullListInner: FC<IGenericFullListInnerProps<ICountry[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.id}>{item.name}</div>
      )
    }
  </div>
);

export const CountriesFullList = GenericFullList<ICountry[]>(
  CountriesFullListInner,
  getAllCountries
);
