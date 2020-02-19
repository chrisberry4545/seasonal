import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { ICountryFoodNameMap } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleCountryFoodNameMap, updateCountryFoodNameMap } from '../../services';
import { BaseFormCountryFoodNameMap } from '../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap';

export const EditCountryFoodNameMapForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<ICountryFoodNameMap>(
    BaseFormCountryFoodNameMap,
    () => {
      return getSingleCountryFoodNameMap(id as string);
    },
    updateCountryFoodNameMap
  );
  return <CreatedComponent />;
};
