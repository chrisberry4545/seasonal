import React, { FC } from 'react';
import { createTranslationsRegionName } from '../../services';
import { ITranslationsRegionName } from '@chrisb-dev/seasonal-shared-models';
import {
  BaseFormTranslationsRegionName
} from '../BaseFormTranslationsRegionName/BaseFormTranslationsRegionName';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyTranslationsRegionName = (): ITranslationsRegionName => ({
  id: '',
  languages: [],
  name: '',
  regionId: ''
} as ITranslationsRegionName);

export const CreateTranslationsRegionNameForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Translations Region Name'>
    <BaseFormTranslationsRegionName
        items={createEmptyTranslationsRegionName()}
        updateMethod={createTranslationsRegionName}
        buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
