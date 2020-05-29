import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import { getSingleBadge, updateBadge } from '../../services';
import { BaseFormBadge } from '../BaseFormBadge/BaseFormBadge';
import { LayoutWithTitle } from '../../components-layouts';

export const EditBadgeForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Badge'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormBadge}
        requestDataMethod={() => getSingleBadge(id as string)}
        updateMethod={updateBadge}
        />
    </LayoutWithTitle>
  );
};
