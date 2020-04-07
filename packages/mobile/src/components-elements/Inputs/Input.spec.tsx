import React from 'react';
import { Input } from './Input';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  TextInput: () => 'TextInput'
}));

describe('<Input />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Input
        style={{ color: '#000000' }}
        onChange={() => undefined} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
