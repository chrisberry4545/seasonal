import React from 'react';
import { LoginPage } from './LoginPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  LoginForm: () => 'LoginForm'
}));

describe('<LoginPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <LoginPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
