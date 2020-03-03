import React, { FC } from 'react';
import { createCountry } from '../../services';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { BaseFormCountry } from '../BaseFormCountry/BaseFormCountry';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyCountryItem = (): ICountry => ({
  name: ''
} as ICountry);

export const CreateCountryForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Country'>
    <BaseFormCountry
      items={createEmptyCountryItem()}
      updateMethod={createCountry}
      buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
