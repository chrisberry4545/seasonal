import React, { FC } from 'react';
import { createUser } from '../../services';
import { IUser } from '@chrisb-dev/seasonal-shared';
import { BaseFormUser } from '../BaseFormUser/BaseFormUser';
import { FORM_BUTTON_TEXT } from '../../consts';

const createEmptyUserItem = (): IUser => ({
  password: '',
  roles: [] as string[],
  username: ''
} as IUser);

export const CreateUserForm: FC<{}> = () =>
  <BaseFormUser items={createEmptyUserItem()}
    updateMethod={createUser}
    buttonText={FORM_BUTTON_TEXT.CREATE} />;
