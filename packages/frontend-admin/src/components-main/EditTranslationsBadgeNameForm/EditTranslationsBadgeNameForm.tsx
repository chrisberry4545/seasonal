import React, { FC } from 'react';
import {
  GetAuthorizedBackendData
} from '../GetAuthorizedBackendData/GetAuthorizedBackendData';
import { useParams } from 'react-router-dom';
import {
  getOneTranslationsBadgeName,
  updateTranslationsBadgeName
} from '../../services';
import {
  BaseFormTranslationsBadgeName
} from '../BaseFormTranslationsBadgeName/BaseFormTranslationsBadgeName';
import { LayoutWithTitle } from '../../components-layouts';

export const EditTranslationsBadgeNameForm: FC<{}> = () => {
  const { id } = useParams();
  return (
    <LayoutWithTitle title='Edit Translations Badge Name'>
      <GetAuthorizedBackendData
        InnerComponent={BaseFormTranslationsBadgeName}
        requestDataMethod={() => getOneTranslationsBadgeName(id as string)}
        updateMethod={updateTranslationsBadgeName}
        />
    </LayoutWithTitle>
  );
};
