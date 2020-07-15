import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import {
  getOneTranslationsRegionName,
  updateTranslationsRegionName
} from '../../services';
import {
  BaseFormTranslationsRegionName
} from '../BaseFormTranslationsRegionName/BaseFormTranslationsRegionName';
import { LayoutWithTitle } from '../../components-layouts';

export const EditTranslationsRegionNameForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Translations Region Name'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormTranslationsRegionName}
        requestDataMethod={() => getOneTranslationsRegionName(id as string)}
        updateMethod={updateTranslationsRegionName}
        />
    </LayoutWithTitle>
  );
};
