import React, { FC } from 'react';
import { createRegion } from '../../services';
import { IDbRegion } from '@chrisb-dev/seasonal-shared-models';
import { BaseFormRegion, IDbRegionFormConfigProps } from '../BaseFormRegion/BaseFormRegion';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';
import { requiredValidation } from '@chrisb-dev/seasonal-shared-frontend-components';

const createEmptyRegionItem = (): IDbRegion => ({
  code: '',
  countryId: undefined,
  isDisabled: false,
  lat: 0,
  lng: 0,
  name: ''
} as IDbRegion);

const createOnlyFields: IDbRegionFormConfigProps = {
  code: {
    type: 'text',
    validation: [requiredValidation]
  }
};

export const CreateRegionForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Region'>
    <BaseFormRegion items={createEmptyRegionItem()}
      updateMethod={createRegion}
      buttonText={FORM_BUTTON_TEXT.CREATE}
      additionalConfig={createOnlyFields} />
  </LayoutWithTitle>;
