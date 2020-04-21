import React, { FC } from 'react';
import { createBadge } from '../../services';
import { IBadge } from '@chrisb-dev/seasonal-shared-models';
import { BaseFormBadge } from '../BaseFormBadge/BaseFormBadge';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyBadgeItem = (): IBadge => ({
  name: ''
} as IBadge);

export const CreateBadgeForm: FC<{}> = () =>
  <LayoutWithTitle title='Create Badge'>
    <BaseFormBadge
      items={createEmptyBadgeItem()}
      updateMethod={createBadge}
      buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
