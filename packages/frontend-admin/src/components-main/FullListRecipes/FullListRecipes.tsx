import React, { FC } from 'react';
import { getAllRecipes, deleteRecipe } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';
import { DeleteItemButton } from '../DeleteItemButton/DeleteItemButton';

const FullListRecipesInner: FC<IGetAuthorizedBackendDataProps<IRecipe[]>> = ({
  items,
  reload
}) => (
  <div>
    {
      items && items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.RECIPE}/${ROUTES.EDIT}/${item.id}`}>
            Edit
          </Link>
          <DeleteItemButton deleteItem={
            () => deleteRecipe(item.id).then((recipe) => {
              if (reload) {
                reload();
              }
              return recipe;
            })
          } />
        </div>
      )
    }
  </div>
);
export const FullListRecipes = GetAuthorizedBackendData<IRecipe[]>(
  FullListRecipesInner,
  getAllRecipes
);
