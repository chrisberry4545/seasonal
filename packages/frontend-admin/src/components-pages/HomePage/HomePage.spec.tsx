import React from 'react';
import { HomePage } from './HomePage';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('../../components-main', () => ({
  MainLinks: () => 'MainLinks'
}));

describe('<HomePage />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() =>
    wrapper = shallow(
      <HomePage />
    )
  );

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

});
