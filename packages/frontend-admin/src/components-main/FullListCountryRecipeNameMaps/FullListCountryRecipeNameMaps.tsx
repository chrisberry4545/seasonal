import React, { FC } from 'react';
import { getAllCountryRecipeNameMap, deleteCountryToRecipeNameMap } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { Link } from 'react-router-dom';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListCountryRecipeNameMapInner: FC<IGetAuthorizedBackendDataProps<ICountryRecipeNameMap[]>> = ({
  items,
  reload
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.COUNTRY_RECIPE_NAME_MAP}/${ROUTES.EDIT}/${item.id}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteCountryToRecipeNameMap(item.id).then((country) => {
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

export const FullListCountryRecipeNameMaps = GetAuthorizedBackendData<ICountryRecipeNameMap[]>(
  FullListCountryRecipeNameMapInner,
  getAllCountryRecipeNameMap
);
