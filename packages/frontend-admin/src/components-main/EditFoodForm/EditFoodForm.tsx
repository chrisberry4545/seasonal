import React, { FC } from 'react';
import {
  IGetAuthorizedBackendDataProps,
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { IDataFormConfigProps, DataForm } from '../DataForm/DataForm';
import { updateFood, getSingleFood } from '../../services';
import {
  requiredValidation
} from '@chrisb-dev/seasonal-shared-frontend-components';

type IFoodFormConfigProps = IDataFormConfigProps<IFood>;

const foodFormConfig: IFoodFormConfigProps = {
  name: {
    type: 'text',
    validation: [requiredValidation]
  }
};

const EditFoodFormInner: FC<IGetAuthorizedBackendDataProps<IFood>> = ({
  items
}) => (
  <DataForm item={items}
    sendData={updateFood}
    formConfig={foodFormConfig} />
);

export const EditFoodForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IFood>(
    EditFoodFormInner,
    () => {
      return getSingleFood(id as string);
    }
  );
  return <CreatedComponent />;
};
