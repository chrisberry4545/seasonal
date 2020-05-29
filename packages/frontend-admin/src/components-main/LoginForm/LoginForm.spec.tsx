import React from 'react';
import { LoginForm } from './LoginForm';
import { shallow, ShallowWrapper } from 'enzyme';
import { IUser } from '@chrisb-dev/seasonal-shared-models';
import { DataForm } from '../DataForm/DataForm';
import * as services from '../../services';

jest.mock('../../services', () => ({
  loginRequest: jest.fn()
}));
jest.mock('../DataForm/DataForm', () => ({
  DataForm: () => 'DataForm'
}));

describe('<LoginForm />', () => {
  let wrapper: ShallowWrapper;
  let mockLoginRequest: jest.SpyInstance;

  beforeEach(() => {
    mockLoginRequest = jest.spyOn(services, 'loginRequest')
      .mockResolvedValue(undefined);
    wrapper = shallow(
      <LoginForm />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  describe('on login', () => {
    const user = {
      password: 'password',
      username: 'username'
    } as IUser;
    beforeEach(() => {
      const sendData = wrapper.find(DataForm).first().props().sendData;
      if (sendData) {
        sendData(user);
      }
    });

    test('logs the user in', () =>
      expect(mockLoginRequest).toHaveBeenCalledWith(user.username, user.password));

    test('redirects the user to the home page', () => expect(wrapper).toMatchSnapshot());

  });

});
