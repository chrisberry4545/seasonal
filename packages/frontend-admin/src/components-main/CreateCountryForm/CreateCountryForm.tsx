import React, { FC } from 'react';
import { createCountry } from '../../services';
import { ICountry } from '@chrisb-dev/seasonal-shared';
import { BaseFormCountry } from '../BaseFormCountry/BaseFormCountry';

const createEmptyCountryItem = (): ICountry => ({
  name: ''
} as ICountry);

export const CreateCountryForm: FC<{}> = () =>
  <BaseFormCountry items={createEmptyCountryItem()} updateMethod={createCountry} />;
