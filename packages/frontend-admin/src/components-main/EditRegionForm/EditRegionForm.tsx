import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getOneRegion, updateRegion } from '../../services';
import { BaseFormRegion } from '../BaseFormRegion/BaseFormRegion';
import { LayoutWithTitle } from '../../components-layouts';

export const EditRegionForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Region'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormRegion}
        requestDataMethod={() => getOneRegion(id as string)}
        updateMethod={updateRegion}
        />
    </LayoutWithTitle>
  );
};
