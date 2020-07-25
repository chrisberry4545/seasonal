import React, { FC } from 'react';
import { createTranslationsBadgeName } from '../../services';
import { ITranslationsBadgeName } from '@chrisb-dev/seasonal-shared-models';
import {
  BaseFormTranslationsBadgeName
} from '../BaseFormTranslationsBadgeName/BaseFormTranslationsBadgeName';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyTranslationsBadgeName = (): ITranslationsBadgeName => ({
  badgeId: '',
  id: '',
  languages: [],
  name: ''
} as ITranslationsBadgeName);

export const CreateTranslationsBadgeNameForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Translations Badge Name'>
    <BaseFormTranslationsBadgeName
        items={createEmptyTranslationsBadgeName()}
        updateMethod={createTranslationsBadgeName}
        buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
