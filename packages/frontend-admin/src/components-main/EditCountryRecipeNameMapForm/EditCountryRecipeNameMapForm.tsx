import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared-models';
import { useParams } from 'react-router-dom';
import { getSingleCountryRecipeNameMap, updateCountryRecipeNameMap } from '../../services';
import { BaseFormCountryRecipeNameMap } from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';
import { LayoutWithTitle } from '../../components-layouts';

export const EditCountryRecipeNameMapForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<ICountryRecipeNameMap>(
    BaseFormCountryRecipeNameMap,
    () => {
      return getSingleCountryRecipeNameMap(id as string);
    },
    updateCountryRecipeNameMap
  );
  return (
    <LayoutWithTitle title='Edit Country Recipe Name Map'>
      <CreatedComponent />
    </LayoutWithTitle>
  );
};
