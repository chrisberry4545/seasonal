import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IDbRegion } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleRegion, updateRegion } from '../../services';
import { BaseFormRegion } from '../BaseFormRegion/BaseFormRegion';

export const EditRegionForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IDbRegion>(
    BaseFormRegion,
    () => {
      return getSingleRegion(id as string);
    },
    updateRegion
  );
  return <CreatedComponent />;
};
