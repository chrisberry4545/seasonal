import React from 'react';
import { TextHeadingSmall } from './TextHeadingSmall';
import { shallow, ShallowWrapper } from 'enzyme';

jest.mock('react-native', () => ({
  Text: () => 'Text'
}));

describe('<TextHeadingSmall />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TextHeadingSmall
        style={{ color: '#000000' }}>
          Text
      </TextHeadingSmall>
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());
});
