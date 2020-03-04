import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { IFood } from '@chrisb-dev/seasonal-shared';
import { useParams } from 'react-router-dom';
import { getSingleFood, updateFood } from '../../services';
import { BaseFormFood } from '../BaseFormFood/BaseFormFood';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

export const EditFoodForm: FC<{}> = () => {
  const { id } = useParams();
  const CreatedComponent = GetAuthorizedBackendData<IFood>(
    BaseFormFood,
    () => {
      return getSingleFood(id as string);
    },
    updateFood,
    FORM_BUTTON_TEXT.CREATE
  );
  return (
    <LayoutWithTitle title='Edit Food'>
      <CreatedComponent />
    </LayoutWithTitle>
  );
};
