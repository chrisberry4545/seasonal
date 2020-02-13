import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleCountry } from '../../services/get-single-country';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { updateCountry } from '../../services';

type ICountryFormConfigProps = IDataFormConfigProps<ICountry>;

const countryFormConfig: ICountryFormConfigProps = {
  name: {
    type: 'text'
  }
};

const EditCountriesFormInner: FC<IGetAuthorizedBackendDataProps<ICountry>> = ({
  items
}) => (
  <DataForm item={items}
    sendData={updateCountry}
    formConfig={countryFormConfig} />
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
