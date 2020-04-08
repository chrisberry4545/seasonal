import React from 'react';
import { IconBase } from './IconBase';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('@expo/vector-icons', () => ({
  Ionicons: () => 'Ionicons'
}));

describe('<IconBase />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <IconBase
        name='test-name'
        size={50}
        color={'#000000'} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
