import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleCountry } from '../../services/get-single-country';

const EditCountriesFormInner: FC<IGetAuthorizedBackendDataProps<ICountry>> = ({
  items
}) => (
  <div>
    { items.name }
  </div>
);

export const EditCountryForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<ICountry>(
    EditCountriesFormInner,
    () => {
      return getSingleCountry(id as string);
    }
  );
  return <CreatedComponent />;
};
