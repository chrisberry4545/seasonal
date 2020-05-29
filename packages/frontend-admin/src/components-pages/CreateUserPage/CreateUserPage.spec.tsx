import React from 'react';
import { CreateUserPage } from './CreateUserPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  CreateUserForm: () => 'CreateUserForm'
}));

describe('<CreateUserPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <CreateUserPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
