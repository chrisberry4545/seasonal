import React, { FC } from 'react';
import { getSingleRecipe, updateRecipe } from '../../services';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRecipe } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { BaseFormRecipe } from '../BaseFormRecipe/BaseFormRecipe';
import { LayoutWithTitle } from '../../components-layouts';

export const EditRecipeForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IRecipe>(
    BaseFormRecipe,
    () => {
      return getSingleRecipe(id as string);
    },
    updateRecipe
  );
  return (
    <LayoutWithTitle title='Edit Recipe'>
      <CreatedComponent />
    </LayoutWithTitle>
  );
};
