import React from 'react';
import { TextHeadingLarge } from './TextHeadingLarge';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  Text: () => 'Text'
}));

describe('<TextHeadingLarge />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextHeadingLarge
        style={{ color: '#000000' }}>
          Text
      </TextHeadingLarge>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
