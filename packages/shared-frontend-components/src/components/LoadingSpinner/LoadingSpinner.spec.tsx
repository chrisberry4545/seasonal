import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<LoadingSpinner />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<LoadingSpinner />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
