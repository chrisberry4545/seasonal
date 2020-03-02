import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryRecipeNameMap } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleCountryRecipeNameMap, updateCountryRecipeNameMap } from '../../services';
import { BaseFormCountryRecipeNameMap } from '../BaseFormCountryRecipeNameMap/BaseFormCountryRecipeNameMap';
import { FormLayout } from '../../components-layouts';

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
    <FormLayout title='Edit Country Recipe Name Map'>
      <CreatedComponent />
    </FormLayout>
  );
};
