import React from 'react';
import { ViewUsersPage } from './ViewUsersPage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  FullListUsers: () => 'FullListUsers'
}));

describe('<ViewUsersPage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <ViewUsersPage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
