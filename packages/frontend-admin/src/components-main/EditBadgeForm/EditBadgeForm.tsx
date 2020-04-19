import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { useParams } from 'react-router-dom';
import { getSingleBadge, updateBadge } from '../../services';
import { BaseFormBadge } from '../BaseFormBadge/BaseFormBadge';
import { LayoutWithTitle } from '../../components-layouts';

export const EditBadgeForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IBadge>(
    BaseFormBadge,
    () => {
      return getSingleBadge(id as string);
    },
    updateBadge
  );
  return (
    <LayoutWithTitle title='Edit Badge'>
      <CreatedComponent />
    </LayoutWithTitle>
  );
};
