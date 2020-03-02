import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleCountry, updateCountry } from '../../services';
import { BaseFormCountry } from '../BaseFormCountry/BaseFormCountry';
import { FormLayout } from '../../components-layouts';

export const EditCountryForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<ICountry>(
    BaseFormCountry,
    () => {
      return getSingleCountry(id as string);
    },
    updateCountry
  );
  return (
    <FormLayout title='Edit Country'>
      <CreatedComponent />
    </FormLayout>
  );
};
