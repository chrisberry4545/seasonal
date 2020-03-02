import React, { FC } from 'react';
import { createRegion } from '../../services';
import { IDbRegion } from '@chrisb-dev/seasonal-shared';
import { BaseFormRegion } from '../BaseFormRegion/BaseFormRegion';
import { FORM_BUTTON_TEXT } from '../../consts';

const createEmptyRegionItem = (): IDbRegion => ({
  code: '',
  countryId: '',
  isDisabled: false,
  lat: 0,
  lng: 0,
  name: ''
} as IDbRegion);

export const CreateRegionForm: FC<{}> = () =>
  <BaseFormRegion items={createEmptyRegionItem()}
    updateMethod={createRegion}
    buttonText={FORM_BUTTON_TEXT.CREATE} />;
