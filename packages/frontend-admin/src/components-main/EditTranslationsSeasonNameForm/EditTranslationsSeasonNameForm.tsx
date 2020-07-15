import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import {
  getOneTranslationsSeasonName,
  updateTranslationsSeasonName
} from '../../services';
import {
  BaseFormTranslationsSeasonName
} from '../BaseFormTranslationsSeasonName/BaseFormTranslationsSeasonName';
import { LayoutWithTitle } from '../../components-layouts';

export const EditTranslationsSeasonNameForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Translations Season Name'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormTranslationsSeasonName}
        requestDataMethod={() => getOneTranslationsSeasonName(id as string)}
        updateMethod={updateTranslationsSeasonName}
        />
    </LayoutWithTitle>
  );
};
