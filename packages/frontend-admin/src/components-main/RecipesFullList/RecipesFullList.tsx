import React, { FC } from 'react';
import { getAllRecipes } from '../../services';
import {
  IGenericFullListInnerProps,
  GenericFullList
} from '../GenericFullList/GenericFullList';
import { IRecipe } from '@chrisb-dev/seasonal-shared';

const RecipesFullListInner: FC<IGenericFullListInnerProps<IRecipe>> = ({
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
export const RecipesFullList = GenericFullList<IRecipe>(
  RecipesFullListInner,
  getAllRecipes
);
