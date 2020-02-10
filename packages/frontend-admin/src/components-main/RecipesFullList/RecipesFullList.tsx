import React, { FC } from 'react';
import { getAllRecipes } from '../../services';
import {
  IGenericFullListInnerProps,
  GenericFullList
} from '../GenericFullList/GenericFullList';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { Link } from 'react-router-dom';

const RecipesFullListInner: FC<IGenericFullListInnerProps<IRecipe[]>> = ({
  items
}) => (
  <div>
    {
      items.map((item) =>
        <div key={item.id}>
          {item.name}
          <Link to={`recipes/${item.id}`}>Edit</Link>
        </div>
      )
    }
  </div>
);
export const RecipesFullList = GenericFullList<IRecipe[]>(
  RecipesFullListInner,
  getAllRecipes
);
