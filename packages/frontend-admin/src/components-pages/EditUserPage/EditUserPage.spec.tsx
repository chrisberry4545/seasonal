import React from 'react';
import { EditUserPage } from './EditUserPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  EditUserForm: () => 'EditUserForm'
}));

describe('<EditUserPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <EditUserPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
