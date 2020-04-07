import React from 'react';
import { MultilineInput } from './MultilineInput';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  TextInput: () => 'TextInput'
}));

describe('<MultilineInput />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MultilineInput
        style={{ color: '#000000' }}
        onChange={() => undefined} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
