import React from 'react';
import { TextLarge } from './TextLarge';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  Text: () => 'Text'
}));

describe('<TextLarge />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextLarge
        style={{ color: '#000000' }}>
          Text
      </TextLarge>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
