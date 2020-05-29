import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getOneFood, updateFood } from '../../services';
import { BaseFormFood } from '../BaseFormFood/BaseFormFood';
import { LayoutWithTitle } from '../../components-layouts';

export const EditFoodForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Food'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormFood}
        requestDataMethod={() => getOneFood(id as string)}
        updateMethod={updateFood}
        />
    </LayoutWithTitle>
  );
};
