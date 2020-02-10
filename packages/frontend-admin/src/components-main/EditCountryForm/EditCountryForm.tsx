import React, { FC } from 'react';
import {
  IGenericFullListInnerProps,
  GenericFullList
} from '../GenericFullList/GenericFullList';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleCountry } from '../../services/get-single-country';

const EditCountriesFormInner: FC<IGenericFullListInnerProps<ICountry>> = ({
  items
}) => (
  <div>
    { items.name }
  </div>
);

export const EditCountryForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GenericFullList<ICountry>(
    EditCountriesFormInner,
    () => {
      return getSingleCountry(id as string);
    }
  );
  return <CreatedComponent />;
};
