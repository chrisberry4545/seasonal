import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import {
  getOneTranslationsCountryName,
  updateTranslationsCountryName
} from '../../services';
import {
  BaseFormTranslationsCountryName
} from '../BaseFormTranslationsCountryName/BaseFormTranslationsCountryName';
import { LayoutWithTitle } from '../../components-layouts';

export const EditTranslationsCountryNameForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Translations Country Name'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormTranslationsCountryName}
        requestDataMethod={() => getOneTranslationsCountryName(id as string)}
        updateMethod={updateTranslationsCountryName}
        />
    </LayoutWithTitle>
  );
};
