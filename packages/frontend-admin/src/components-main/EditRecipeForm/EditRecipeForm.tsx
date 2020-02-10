import React, { FC } from 'react';
import { getSingleRecipe } from '../../services';
import {
  IGenericFullListInnerProps,
  GenericFullList
} from '../GenericFullList/GenericFullList';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';

const EditRecipeFormInner: FC<IGenericFullListInnerProps<IRecipe>> = ({
  items
}) => (
  <div>
    { items.name }
  </div>
);

export const EditRecipeForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GenericFullList<IRecipe>(
    EditRecipeFormInner,
    () => {
      return getSingleRecipe(id as string);
    }
  );
  return <CreatedComponent />;
};
