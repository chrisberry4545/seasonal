import React, { FC } from 'react';
import { getAllRecipes } from '../../services';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../config';

const RecipesFullListInner: FC<IGetAuthorizedBackendDataProps<IRecipe[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`${ROUTES.RECIPE}/${item.id}`}>Edit</Link>
        </div>
      )
    }
  </div>
);
export const RecipesFullList = GetAuthorizedBackendData<IRecipe[]>(
  RecipesFullListInner,
  getAllRecipes
);
