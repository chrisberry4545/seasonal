import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getSingleCountry, updateCountry } from '../../services';
import { BaseFormCountry } from '../BaseFormCountry/BaseFormCountry';
import { LayoutWithTitle } from '../../components-layouts';

export const EditCountryForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Country'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormCountry}
        requestDataMethod={() => getSingleCountry(id as string)}
        updateMethod={updateCountry}
        />
    </LayoutWithTitle>
  );
};
