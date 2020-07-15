import React, { FC } from 'react';
import { createTranslationsCountryName } from '../../services';
import { ITranslationsCountryName } from '@chrisb-dev/seasonal-shared-models';
import {
  BaseFormTranslationsCountryName
} from '../BaseFormTranslationsCountryName/BaseFormTranslationsCountryName';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyTranslationsCountryName = (): ITranslationsCountryName => ({
  countryId: '',
  id: '',
  languages: [],
  name: ''
} as ITranslationsCountryName);

export const CreateTranslationsCountryNameForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Translations Country Name'>
    <BaseFormTranslationsCountryName
        items={createEmptyTranslationsCountryName()}
        updateMethod={createTranslationsCountryName}
        buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
