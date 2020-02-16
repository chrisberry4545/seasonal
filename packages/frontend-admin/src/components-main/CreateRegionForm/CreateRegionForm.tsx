import React, { FC } from 'react';
import { createRegion } from '../../services';
import { IRegion } from '@chrisb-dev/seasonal-shared';
import { BaseFormRegion } from '../BaseFormRegion/BaseFormRegion';

const createEmptyRegionItem = (): IRegion => ({
  code: '',
  countryId: '',
  isDisabled: false,
  name: ''
} as IRegion);

export const CreateRegionForm: FC<{}> = () =>
  <BaseFormRegion items={createEmptyRegionItem()} updateMethod={createRegion} />;
