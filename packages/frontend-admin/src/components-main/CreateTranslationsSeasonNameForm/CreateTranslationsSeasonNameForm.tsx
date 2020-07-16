import React, { FC } from 'react';
import { createTranslationsSeasonName } from '../../services';
import { ITranslationsSeasonName } from '@chrisb-dev/seasonal-shared-models';
import {
  BaseFormTranslationsSeasonName
} from '../BaseFormTranslationsSeasonName/BaseFormTranslationsSeasonName';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyTranslationsSeasonName = (): ITranslationsSeasonName => ({
  id: '',
  languages: [],
  name: '',
  seasonId: ''
} as ITranslationsSeasonName);

export const CreateTranslationsSeasonNameForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Translations Season Name'>
    <BaseFormTranslationsSeasonName
        items={createEmptyTranslationsSeasonName()}
        updateMethod={createTranslationsSeasonName}
        buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
