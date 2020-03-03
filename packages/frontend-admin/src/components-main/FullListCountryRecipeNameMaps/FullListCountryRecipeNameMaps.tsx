import React, { FC } from 'react';
import { getAllCountryRecipeNameMap, deleteCountryToRecipeNameMap } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListCountryRecipeNameMapInner: FC<IGetAuthorizedBackendDataProps<ICountryRecipeNameMap[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Country Recipe Name Map'
    items={items}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.COUNTRY_RECIPE_NAME_MAP}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteCountryToRecipeNameMap(item.id).then((country) => {
      if (reload) {
        reload();
      }
      return country;
    })}
  />
);

export const FullListCountryRecipeNameMaps = GetAuthorizedBackendData<ICountryRecipeNameMap[]>(
  FullListCountryRecipeNameMapInner,
  getAllCountryRecipeNameMap
);
