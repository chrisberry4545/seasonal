import React, { FC } from 'react';
import { getAllRecipes, deleteRecipe } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { ROUTES } from '../../config';
import { FullList } from '../FullList/FullList';

const FullListRecipesInner: FC<IGetAuthorizedBackendDataProps<IRecipe[]>> = ({
  items,
  reload
}) => (
  <FullList
    title='Recipes'
    items={items}
    getItemId={(item) => item.id}
    getItemName={(item) => item.name}
    getItemEditUrl={(item) => `${ROUTES.RECIPE}/${ROUTES.EDIT}/${item.id}`}
    deleteItemFunc={(item) => deleteRecipe(item.id).then((recipe) => {
      if (reload) {
        reload();
      }
      return recipe;
    })}
  />
);
export const FullListRecipes = GetAuthorizedBackendData<IRecipe[]>(
  FullListRecipesInner,
  getAllRecipes
);
