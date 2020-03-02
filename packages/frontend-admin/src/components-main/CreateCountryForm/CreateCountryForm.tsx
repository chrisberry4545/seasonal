import React, { FC } from 'react';
import { createCountry } from '../../services';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { BaseFormCountry } from '../BaseFormCountry/BaseFormCountry';
import { FORM_BUTTON_TEXT } from '../../consts';
import { FormLayout } from '../../components-layouts';

const createEmptyCountryItem = (): ICountry => ({
  name: ''
} as ICountry);

export const CreateCountryForm: FC<{}> = () =>
  <FormLayout title='Create Country'>
    <BaseFormCountry
      items={createEmptyCountryItem()}
      updateMethod={createCountry}
      buttonText={FORM_BUTTON_TEXT.CREATE} />
  </FormLayout>;
