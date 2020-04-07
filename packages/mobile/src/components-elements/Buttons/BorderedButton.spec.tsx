import React from 'react';
import { BorderedButton } from './BorderedButton';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  TouchableOpacity: () => 'TouchableOpacity'
}));

describe('<BorderedButton />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<BorderedButton />);
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
