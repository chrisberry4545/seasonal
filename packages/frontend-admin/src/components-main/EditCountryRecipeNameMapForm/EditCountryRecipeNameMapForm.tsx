import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getSingleCountryRecipeNameMap, updateCountryRecipeNameMap } from '../../services';
import { BaseFormCountryRecipeNameMap } from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';
import { LayoutWithTitle } from '../../components-layouts';

export const EditCountryRecipeNameMapForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Country Recipe Name Map'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormCountryRecipeNameMap}
        requestDataMethod={() => getSingleCountryRecipeNameMap(id as string)}
        updateMethod={updateCountryRecipeNameMap}
        />
    </LayoutWithTitle>
  );
};
