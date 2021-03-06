import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getOneCountryFoodNameMap, updateCountryFoodNameMap } from '../../services';
import { BaseFormCountryFoodNameMap } from '../BaseFormCountryFoodNameMap/BaseFormCountryFoodNameMap';
import { LayoutWithTitle } from '../../components-layouts';

export const EditCountryFoodNameMapForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Country Food Name Map'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormCountryFoodNameMap}
        requestDataMethod={() => getOneCountryFoodNameMap(id as string)}
        updateMethod={updateCountryFoodNameMap}
        />
    </LayoutWithTitle>
  );
};
