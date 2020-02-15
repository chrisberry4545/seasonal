import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IRegion } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { getSingleRegion, updateRegion } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IRegionFormConfigProps = IDataFormConfigProps<IRegion>;

const regionFormConfig: IRegionFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  }
};

const EditRegionFormInner: FC<IGetAuthorizedBackendDataProps<IRegion>> = ({
  items
}) => (
  <DataForm item={items}
    sendData={updateRegion}
    formConfig={regionFormConfig} />
);

export const EditRegionForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IRegion>(
    EditRegionFormInner,
    () => {
      return getSingleRegion(id as string);
    }
  );
  return <CreatedComponent />;
};
