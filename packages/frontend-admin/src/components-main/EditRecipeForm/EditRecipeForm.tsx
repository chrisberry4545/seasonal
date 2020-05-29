import React, { FC } from 'react';
import { getSingleRecipe, updateRecipe } from '../../services';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { BaseFormRecipe } from '../BaseFormRecipe/BaseFormRecipe';
import { LayoutWithTitle } from '../../components-layouts';

export const EditRecipeForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Recipe'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormRecipe}
        requestDataMethod={() => getSingleRecipe(id as string)}
        updateMethod={updateRecipe}
        />
    </LayoutWithTitle>
  );
};
