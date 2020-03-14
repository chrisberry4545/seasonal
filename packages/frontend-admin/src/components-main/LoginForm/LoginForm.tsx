import React, { FC, useState } from 'react';
import { loginRequest } from '../../services';
import { Redirect } from 'react-router';
import { requiredValidation } from '@chrisb-dev/seasonal-shared-frontend-components';
import { LayoutWithTitle } from '../../components-layouts';
import { DataForm, IDataFormConfigProps } from '../DataForm/DataForm';
import { IUser } from '@chrisb-dev/seasonal-shared-models';

type ILoginFormConfigProps = IDataFormConfigProps<IUser>;

const loginFormConfig: ILoginFormConfigProps = {
  username: {
    type: 'text',
    validation: [requiredValidation]
  },

  password: {
    type: 'password',
    validation: [requiredValidation]
  }
};

export const LoginForm: FC<{}> = () => {
  const [redirectToNextPageState, setRedirectToNextPageState] = useState(
    false
  );

  const handleSubmit = async (user: IUser) => {
    await loginRequest(user.username, user.password);
    setRedirectToNextPageState(true);
    return;
  };

  if (redirectToNextPageState) {
    return <Redirect push to='/home' />;
  }
  return (
    <LayoutWithTitle title='Login'>
      <DataForm
        item={{ username: '', password: '' } as IUser}
        sendData={handleSubmit}
        formConfig={loginFormConfig}
        buttonText='Login' />
    </LayoutWithTitle>
  );
};
