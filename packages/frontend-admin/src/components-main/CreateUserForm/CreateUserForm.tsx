import React, { FC } from 'react';
import { createUser } from '../../services';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { BaseFormUser } from '../BaseFormUser/BaseFormUser';
import { FORM_BUTTON_TEXT } from '../../consts';
import { LayoutWithTitle } from '../../components-layouts';

const createEmptyUserItem = (): IUser => ({
  password: '',
  roles: [] as string[],
  username: ''
} as IUser);

export const CreateUserForm: FC<{}> = () =>
  <LayoutWithTitle title='Create User'>
    <BaseFormUser items={createEmptyUserItem()}
        updateMethod={createUser}
        buttonText={FORM_BUTTON_TEXT.CREATE} />
  </LayoutWithTitle>;
